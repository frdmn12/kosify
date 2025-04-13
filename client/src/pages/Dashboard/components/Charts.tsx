import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { TrendingUp } from "lucide-react";

export const description = "A collection of health charts.";

export default function Charts() {
  return (
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
        <Card className="lg:max-w-lg" x-chunk="charts-01-chunk-0">
          <CardHeader className="space-y-0 pb-2">
            <CardDescription>Pendapatan Bulan Ini</CardDescription>
            <CardTitle className="text-4xl tabular-nums">
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                Rp.
              </span>
              12,584{" "}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                steps: {
                  label: "Pendapatan",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: -4,
                  right: -4,
                }}
                data={[
                  {
                    date: "2025-01-01",
                    steps: 2000,
                  },
                  {
                    date: "2025-02-01",
                    steps: 2100,
                  },
                  {
                    date: "2025-03-01",
                    steps: 2200,
                  },
                  {
                    date: "2025-05-01",
                    steps: 1300,
                  },
                  {
                    date: "2025-06-01",
                    steps: 1400,
                  },
                  {
                    date: "2025-07-01",
                    steps: 2500,
                  },
                  {
                    date: "2025-08-01",
                    steps: 1600,
                  },
                ]}
              >
                <Bar
                  dataKey="steps"
                  fill="var(--color-steps)"
                  radius={5}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  tickFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                    });
                  }}
                />
                <ChartTooltip
                  defaultIndex={2}
                  content={
                    <ChartTooltipContent
                      hideIndicator
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        });
                      }}
                    />
                  }
                  cursor={false}
                />
                <ReferenceLine
                  y={1200}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                  <Label
                    position="insideBottomLeft"
                    value="Average Revenue"
                    offset={10}
                    fill="hsl(var(--foreground))"
                  />
                  <Label
                    position="insideTopLeft"
                    value="12,343"
                    className="text-lg"
                    fill="hsl(var(--foreground))"
                    offset={10}
                    startOffset={100}
                  />
                </ReferenceLine>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-1">
            <CardDescription>
              Over the past 7 days, you have walked{" "}
              <span className="font-medium text-foreground">53,305</span> steps.
            </CardDescription>
            <CardDescription>
              You need{" "}
              <span className="font-medium text-foreground">12,584</span> more
              steps to reach your goal.
            </CardDescription>
          </CardFooter>
        </Card>

        <Card x-chunk="dashboard-05-chunk-1">
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">$1,329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +25% from last week
            </div>
          </CardContent>
          <CardFooter>
            <Progress value={25} aria-label="25% increase" />
          </CardFooter>
        </Card>
      </div>
      <div className="grid w-full flex-1 gap-6 lg:max-w-[20rem]">
        <Card className="max-w-xs" x-chunk="charts-01-chunk-2">
          <CardHeader>
            <CardTitle>Data Kamar</CardTitle>
            <CardDescription>
              Perbandingan jumlah propertie dan kamar
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid auto-rows-min gap-2">
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                12,453
                <span className="text-sm font-normal text-muted-foreground">
                  steps/day
                </span>
              </div>
              <ChartContainer
                config={{
                  steps: {
                    label: "Steps",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="aspect-auto h-[32px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  layout="vertical"
                  margin={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  data={[
                    {
                      date: "2024",
                      steps: 12435,
                    },
                  ]}
                >
                  <Bar
                    dataKey="steps"
                    fill="var(--color-steps)"
                    radius={4}
                    barSize={32}
                  >
                    <LabelList
                      position="insideLeft"
                      dataKey="date"
                      offset={8}
                      fontSize={12}
                      fill="white"
                    />
                  </Bar>
                  <YAxis dataKey="date" type="category" tickCount={1} hide />
                  <XAxis dataKey="steps" type="number" hide />
                </BarChart>
              </ChartContainer>
            </div>
            <div className="grid auto-rows-min gap-2">
              <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                10,103
                <span className="text-sm font-normal text-muted-foreground">
                  steps/day
                </span>
              </div>
              <ChartContainer
                config={{
                  steps: {
                    label: "Steps",
                    color: "hsl(var(--muted))",
                  },
                }}
                className="aspect-auto h-[32px] w-full"
              >
                <BarChart
                  accessibilityLayer
                  layout="vertical"
                  margin={{
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                  }}
                  data={[
                    {
                      date: "2023",
                      steps: 10103,
                    },
                  ]}
                >
                  <Bar
                    dataKey="steps"
                    fill="var(--color-steps)"
                    radius={4}
                    barSize={32}
                  >
                    <LabelList
                      position="insideLeft"
                      dataKey="date"
                      offset={8}
                      fontSize={12}
                      fill="hsl(var(--muted-foreground))"
                    />
                  </Bar>
                  <YAxis dataKey="date" type="category" tickCount={1} hide />
                  <XAxis dataKey="steps" type="number" hide />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statistik Penyewa Baru</CardTitle>
            <CardDescription>
              Showing total visitors for the last 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{
                desktop: {
                    label: "Desktop",
                    color: "hsl(var(--chart-1))",
                  },
                  mobile: {
                    label: "Mobile",
                    color: "hsl(var(--chart-2))",
                  },
            }}>
              <AreaChart
                accessibilityLayer
                data={[
                  { month: "January", desktop: 186, mobile: 80 },
                  { month: "February", desktop: 305, mobile: 200 },
                  { month: "March", desktop: 237, mobile: 120 },
                  { month: "April", desktop: 73, mobile: 190 },
                  { month: "May", desktop: 209, mobile: 130 },
                  { month: "June", desktop: 214, mobile: 140 },
                ]}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="var(--color-mobile)"
                  fillOpacity={0.4}
                  stroke="var(--color-mobile)"
                  stackId="a"
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="grid w-full flex-1 gap-6">
        <Card className="max-w-xs" x-chunk="charts-01-chunk-6">
          <CardHeader className="p-4 pb-0">
            <CardTitle>Active Energy</CardTitle>
            <CardDescription>
              You're burning an average of 754 calories per day. Good job!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
            <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
              1,254
              <span className="text-sm font-normal text-muted-foreground">
                kcal/day
              </span>
            </div>
            <ChartContainer
              config={{
                calories: {
                  label: "Calories",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="ml-auto w-[64px]"
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    date: "2024-01-01",
                    calories: 354,
                  },
                  {
                    date: "2024-01-02",
                    calories: 514,
                  },
                  {
                    date: "2024-01-03",
                    calories: 345,
                  },
                  {
                    date: "2024-01-04",
                    calories: 734,
                  },
                  {
                    date: "2024-01-05",
                    calories: 645,
                  },
                  {
                    date: "2024-01-06",
                    calories: 456,
                  },
                  {
                    date: "2024-01-07",
                    calories: 345,
                  },
                ]}
              >
                <Bar
                  dataKey="calories"
                  fill="var(--color-calories)"
                  radius={2}
                  fillOpacity={0.2}
                  activeIndex={6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  hide
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="max-w-xs" x-chunk="charts-01-chunk-7">
          <CardHeader className="space-y-0 pb-0">
            <CardDescription>Time in Bed</CardDescription>
            <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
              8
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                hr
              </span>
              35
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                min
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ChartContainer
              config={{
                time: {
                  label: "Time",
                  color: "hsl(var(--chart-2))",
                },
              }}
            >
              <AreaChart
                accessibilityLayer
                data={[
                  {
                    date: "2024-01-01",
                    time: 8.5,
                  },
                  {
                    date: "2024-01-02",
                    time: 7.2,
                  },
                  {
                    date: "2024-01-03",
                    time: 8.1,
                  },
                  {
                    date: "2024-01-04",
                    time: 6.2,
                  },
                  {
                    date: "2024-01-05",
                    time: 5.2,
                  },
                  {
                    date: "2024-01-06",
                    time: 8.1,
                  },
                  {
                    date: "2024-01-07",
                    time: 7.0,
                  },
                ]}
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="date" hide />
                <YAxis domain={["dataMin - 5", "dataMax + 2"]} hide />
                <defs>
                  <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-time)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-time)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="time"
                  type="natural"
                  fill="url(#fillTime)"
                  fillOpacity={0.4}
                  stroke="var(--color-time)"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                  formatter={(value) => (
                    <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                      Time in bed
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {value}
                        <span className="font-normal text-muted-foreground">
                          hr
                        </span>
                      </div>
                    </div>
                  )}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
