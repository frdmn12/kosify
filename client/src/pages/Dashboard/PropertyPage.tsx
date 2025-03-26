import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

export default function PropertyPage() {
  const chartData = [
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  ];

  const RadialChart = () => {
    return (
      <Card className="flex flex-row items-center max-w-4xl mx-auto">
        <div className="w-1/2 p-6 space-y-4">
          <CardHeader className="p-0 pb-2">
            <CardTitle className="text-3xl">Jumlah Properti</CardTitle>
          </CardHeader>
        </div>

        <CardContent className="w-1/2 flex justify-center items-center p-6">
          <ChartContainer
            config={{
              visitors: {
                label: "Visitors",
              },
              safari: {
                label: "Safari",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="mx-auto aspect-square max-h-[300px] w-full"
          >
            <RadialBarChart
              data={chartData}
              startAngle={0}
              endAngle={250}
              innerRadius={80}
              outerRadius={110}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="visitors" background cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-4xl font-bold"
                          >
                            {chartData[0].visitors.toLocaleString()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Properties
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="m-2 flex flex-col gap-2">
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
        Properties
      </h1>
      <div className="flex flex-row gap-2 items-center justify-evenly my-4">
        <RadialChart />
        <RadialChart />
      </div>
    </div>
  );
}
