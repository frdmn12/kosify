import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Search } from "lucide-react";
import Charts from "./components/Charts";
import {
  Card,
  // CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function MainPage() {
  return (
    <div className="m-2 flex flex-col gap-3">
      <section id="hero">
        <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-2xl">Hello Bayu</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">
              Introducing Our Dynamic Orders Dashboard for Seamless Management
              and Insightful Analysis.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-1/3">
              <Calendar />
              Date: 12 Mar 2025
            </Button>{" "}
          </CardFooter>
        </Card>
      </section>
      <section id="stats">
        <Charts />
        {/* <div className="flex gap-2 justify-center item-center">
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
                <span className="font-medium text-foreground">53,305</span>{" "}
                steps.
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
        </div> */}
      </section>
    </div>
  );
}

