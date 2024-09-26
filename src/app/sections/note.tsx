import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Timer from "@/components/timer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPoints, getPoints } from "@/data/points";
import { formatarDataHora } from "@/lib/utils";
import { ClockIcon, EntradaIcon, SaidaIcon } from "@/components/icons";

export default function NotePage() {
  const queryClient = useQueryClient();

  const { data: points } = useQuery({
    queryKey: ["points"],
    queryFn: getPoints,
  });

  const { mutateAsync: createPointsFn } = useMutation({
    mutationFn: createPoints,
    onSuccess(_, variables) {
      queryClient.setQueryData(["points"], (data: any) => {
        return [
          ...data,
          {
            title: variables.title,
            dateHour: variables.dateHour,
            typePoint: variables.typePoint,
          },
        ];
      });
    },
  });

  async function handleCreatePoints() {
    const dateHour = formatarDataHora();
    const ultimoPonto = points && points[points.length - 1];
    const typePoint =
      ultimoPonto && ultimoPonto.typePoint === "Entrada" ? "Saída" : "Entrada";

    const title = "Ponto Registrado";
    try {
      await createPointsFn({
        title,
        dateHour,
        typePoint,
      });
    } catch (err) {
      alert("Erro ao cadastrar produto");
    }
  }

  return (
    <Card className="grid md:grid-cols-2 gap-8 max-w-20xl mx-auto p-4 h-[89vh]">
      <div className=" overflow-y-auto">
        {points?.map((point) => (
          <Card
            className="p-10 max-h-[200px] overflow-y-auto mt-5"
            key={point.id}
          >
            <div className="flex justify-between">
              <div className="flex items-center">
                {point.typePoint === "Entrada" ? (
                  <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full mr-4">
                    <EntradaIcon className="w-6 h-6" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full mr-4">
                    <SaidaIcon className="w-6 h-6" />
                  </div>
                )}
                <div className="text-lg font-semibold">{point.title}</div>
              </div>
              <div className="text-muted-foreground">{point.dateHour}</div>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex flex-col items-center gap-6 p-4">
        <div className="text-3xl font-bold">Registro de Ponto</div>
        <Timer />
        <Button className="w-full max-w-[300px]" onClick={handleCreatePoints}>
          <ClockIcon className="w-6 h-6 mr-2" />
          Iniciar/Finalizar Apontamento
        </Button>
      </div>
    </Card>
  );
}
