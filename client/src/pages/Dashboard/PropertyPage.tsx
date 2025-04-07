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

  const RadialChart = ({ title, total }) => {
    return (
      <Card className="flex flex-row items-center max-w-4xl mx-auto">
        <div className="w-1/2 p-6 space-y-4">
          <CardHeader className="p-0 pb-2">
            <CardTitle className="text-3xl">Jumlah {title}</CardTitle>
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
      <div className="flex flex-row gap-2 flex-wrap items-center justify-evenly my-4">
        <Card className="w-1/2 flex flex-row items-center justify-between p-6">
          <div className="flex flex-col gap-2">
            <CardHeader>
              <CardTitle className="text-3xl">Total Properties</CardTitle>
              <CardDescription className="text-muted-foreground">
                Total properties in the system
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-start">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardFooter>
          </div>
          <div className="text-3xl font-bold">100</div>
        </Card>
        <Card className="w-1/2 flex flex-row items-center justify-between p-6">
          <div className="flex flex-col gap-2">
            <CardHeader>
              <CardTitle className="text-3xl">Total Properties</CardTitle>
              <CardDescription className="text-muted-foreground">
                Total properties in the system
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-start">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardFooter>
          </div>
          <div className="text-3xl font-bold">100</div>
        </Card>
      </div>
    </div>
  );
}
