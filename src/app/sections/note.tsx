import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotePage() {
  return (
    <Card className="grid md:grid-cols-2 gap-8 max-w-20xl  mx-auto p-4">
      <div className="grid gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Ponto Registrado</div>
            <div className="text-muted-foreground">23/08/2024 - 09:30</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Ponto Registrado</div>
            <div className="text-muted-foreground">23/08/2024 - 18:00</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Ponto Registrado</div>
            <div className="text-muted-foreground">22/08/2024 - 09:15</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Ponto Registrado</div>
            <div className="text-muted-foreground">22/08/2024 - 09:15</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Ponto Registrado</div>
            <div className="text-muted-foreground">22/08/2024 - 09:15</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Ponto Registrado</div>
            <div className="text-muted-foreground">22/08/2024 - 09:15</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Ponto Registrado</div>
            <div className="text-muted-foreground">22/08/2024 - 09:15</div>
          </div>
        </Card>
      </div>
      <div className="flex flex-col items-center gap-6 p-4">
        <div className="text-2xl font-bold">Registro de Ponto</div>
        <Button className="w-full max-w-[300px]">
          <ClockIcon className="w-6 h-6 mr-2" />
          Iniciar/Finalizar Apontamento
        </Button>
      </div>
    </Card>
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
