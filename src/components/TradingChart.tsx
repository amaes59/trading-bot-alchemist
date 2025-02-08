
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "./ui/card";

const data = [
  { date: "2024-01", value: 4000 },
  { date: "2024-02", value: 3000 },
  { date: "2024-03", value: 5000 },
  { date: "2024-04", value: 2780 },
  { date: "2024-05", value: 1890 },
  { date: "2024-06", value: 2390 },
  { date: "2024-07", value: 3490 },
];

export function TradingChart() {
  return (
    <Card className="p-6 animate-fadeIn">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Performance</h3>
        <p className="text-sm text-muted-foreground">Evolution du portefeuille</p>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#10B981"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
