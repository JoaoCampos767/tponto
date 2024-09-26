import { ChartDayPoints } from "@/components/chart-day-points";
import { ChartMonthPoints } from "@/components/chart-month-points";

export function HomePage() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ChartDayPoints />
        <ChartMonthPoints />
      </div>
    </>
  );
}
