export async function getPoints() {
  return [
    {
      id: 1,
      title: "Ponto Registrado",
      dateHour: "23/08/2024 - 09:30",
      typePoint: "Entrada",
    },
    {
      id: 2,
      title: "Ponto Registrado",
      dateHour: "23/08/2024 - 09:30",
      typePoint: "Saida",
    },
    {
      id: 3,
      title: "Ponto Registrado",
      dateHour: "23/08/2024 - 09:30",
      typePoint: "Entrada",
    },
    {
      id: 4,
      title: "Ponto Registrado",
      dateHour: "23/08/2024 - 09:30",
      typePoint: "Saida",
    },
  ];
}

interface CreatePointsRequest {
  title: string;
  dateHour: string;
  typePoint: string;
}

export async function createPoints(data: CreatePointsRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return;
}
