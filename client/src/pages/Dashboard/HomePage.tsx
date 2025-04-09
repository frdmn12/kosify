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
import {
  Bar,
  BarChart,
  Label,
  Rectangle,
  ReferenceLine,
  XAxis,
} from "recharts";
import { Progress } from "@/components/ui/progress";
import { PieChartComp } from "./components/PieChart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function MainPage() {
  return (
    <div className="m-2 flex flex-col gap-3">
      <div id="title-page" className="mb-2">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Home
        </h3>
        <p className="text-sm text-muted-foreground">
          Welcome to the dashboard! Here you can find all the information you
          need
        </p>
      </div>
      <section
        id="stats"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
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

        <div className="grid grid-cols-1 gap-4">
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>This Month Renters</CardDescription>
              <CardTitle className="text-4xl">21</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-xs text-muted-foreground">Check in</p>
                <p className="text-xl ">20</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Check out</p>
                <p className="text-xl ">1</p>
              </div>
            </CardContent>
            <CardFooter>
              <CardDescription>Your property got ......</CardDescription>
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>This Month Transaction</CardDescription>
              <CardTitle className="text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
            <div>
                <p className="text-xs text-muted-foreground">Paid</p>
                <p className="text-xl ">20</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Pending</p>
                <p className="text-xl ">1</p>
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </Card>
        </div>
        <PieChartComp />
      </section>
      <section id="history-transaction">
        <Card>
          <CardHeader>
            <CardDescription>History Transaction</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-medium">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.paymentStatus}</TableCell>
                    <TableCell>{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right">
                      {invoice.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
