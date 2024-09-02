import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Timer from "@/components/timer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPoints, getPoints } from "@/data/points";

export default function NotePage() {
  const queryClient = useQueryClient();

  const { data: points } = useQuery({
    queryKey: ["points"],
    queryFn: getPoints,
  });

  const { mutateAsync: createPointsFn } = useMutation({
    mutationFn: createPoints,
    onSuccess(_, variables) {
      const cached = queryClient.getQueryData(["points"]);

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
    const title = "Ponto Registrado";
    const dateHour = "02/09/2024 - 09:30";
    const typePoint = "Entrada";

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

function EntradaIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

function SaidaIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12h-14" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
