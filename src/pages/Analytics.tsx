import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const complianceTrend = [
  { month: "Sep", value: 84 }, { month: "Oct", value: 89 }, { month: "Nov", value: 91 },
  { month: "Dec", value: 88 }, { month: "Jan", value: 93 }, { month: "Feb", value: 95 },
];

const workerPerf = [
  { name: "Ahmed", score: 94 }, { name: "Sara", score: 88 }, { name: "Omar", score: 91 },
  { name: "Fatima", score: 96 }, { name: "Khalid", score: 85 }, { name: "Layla", score: 79 },
];

const flaggedIssues = [
  { month: "Sep", issues: 12 }, { month: "Oct", issues: 8 }, { month: "Nov", issues: 15 },
  { month: "Dec", issues: 6 }, { month: "Jan", issues: 4 }, { month: "Feb", issues: 3 },
];

const riskDist = [
  { name: "Low", value: 62, color: "hsl(160, 100%, 48%)" },
  { name: "Medium", value: 28, color: "hsl(45, 96%, 56%)" },
  { name: "High", value: 10, color: "hsl(350, 80%, 65%)" },
];

const tooltipStyle = {
  background: "hsl(228, 40%, 10%)",
  border: "1px solid hsl(228, 25%, 18%)",
  borderRadius: "8px",
  color: "hsl(220, 20%, 90%)",
};

const axisColor = "hsl(220, 15%, 55%)";
const gridColor = "hsl(228, 25%, 18%)";

const Analytics = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
      <p className="text-sm text-muted-foreground mt-1">AI-powered quality insights and trends</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Compliance Trend */}
      <div className="glass rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Compliance Trend</h3>
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={complianceTrend}>
            <defs>
              <linearGradient id="aCompGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(187, 85%, 53%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="month" stroke={axisColor} fontSize={12} />
            <YAxis stroke={axisColor} fontSize={12} domain={[75, 100]} />
            <Tooltip contentStyle={tooltipStyle} />
            <Area type="monotone" dataKey="value" stroke="hsl(187, 85%, 53%)" fill="url(#aCompGrad)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Worker Performance */}
      <div className="glass rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Worker Performance</h3>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={workerPerf}>
            <defs>
              <linearGradient id="aBarGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(239, 84%, 67%)" />
                <stop offset="100%" stopColor="hsl(263, 70%, 76%)" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="name" stroke={axisColor} fontSize={12} />
            <YAxis stroke={axisColor} fontSize={12} domain={[60, 100]} />
            <Tooltip contentStyle={tooltipStyle} />
            <Bar dataKey="score" fill="url(#aBarGrad)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* AI Flagged Issues */}
      <div className="glass rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">AI Flagged Issues</h3>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={flaggedIssues}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="month" stroke={axisColor} fontSize={12} />
            <YAxis stroke={axisColor} fontSize={12} />
            <Tooltip contentStyle={tooltipStyle} />
            <Line type="monotone" dataKey="issues" stroke="hsl(350, 80%, 65%)" strokeWidth={2} dot={{ fill: "hsl(350, 80%, 65%)", r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Risk Distribution */}
      <div className="glass rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Risk Distribution</h3>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie data={riskDist} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" paddingAngle={4}>
              {riskDist.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center gap-6 mt-2">
          {riskDist.map((r) => (
            <div key={r.name} className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: r.color }} />
              {r.name} ({r.value}%)
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Analytics;
