import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import { useMemo, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const chartData = [
  { statusRoom: "filled", renters: 275, fill: "var(--color-chrome)" },
  { statusRoom: "unfilled", renters: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  renters: {
    label: "Renters",
  },
  chrome: {
    label: "Filled",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Unfilled",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function PieChartComp() {
  const totalRenters = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.renters, 0);
  }, []);

  const [position, setPosition] = useState("Property");

  const capiTalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        {/* <CardTitle>Kos Basecamp</CardTitle> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{capiTalize(position)}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Choose Property</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem value="kos 1">Kos 1</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="kos 2">
                Kos 2
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="kos 3">Kos 3</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="renters"
              nameKey="statusRoom"
              innerRadius={60}
              strokeWidth={5}
            >
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
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalRenters.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Renters
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm font-medium leading-none">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
