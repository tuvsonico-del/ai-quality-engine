import AiBot from "@/components/AiBot";
import { TrendingUp, GitBranch, AlertTriangle, Zap } from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const complianceData = [
  { month: "Jul", value: 82 }, { month: "Aug", value: 86 }, { month: "Sep", value: 84 },
  { month: "Oct", value: 89 }, { month: "Nov", value: 91 }, { month: "Dec", value: 88 },
  { month: "Jan", value: 93 }, { month: "Feb", value: 95 },
];

const workerData = [
  { name: "Ahmed", score: 94 }, { name: "Sara", score: 88 }, { name: "Omar", score: 91 },
  { name: "Fatima", score: 96 }, { name: "Khalid", score: 85 },
];

const stats = [
  { label: "Compliance Rate", value: "95.2%", icon: TrendingUp, color: "text-success" },
  { label: "Active Pipelines", value: "12", icon: GitBranch, color: "text-accent" },
  { label: "AI Alerts", value: "3", icon: AlertTriangle, color: "text-warning" },
  { label: "Efficiency Score", value: "88%", icon: Zap, color: "text-primary" },
];

const Dashboard = () => (
  <div className="space-y-6 animate-fade-in">
    {/* AI Greeting */}
    <div className="glass rounded-xl p-4 flex items-center gap-4 gradient-border">
      <AiBot size={36} />
      <div>
        <p className="text-foreground font-medium">
          Good Morning, Ahmed. <span className="text-accent">AI is monitoring 3 active cycles.</span>
        </p>
        <p className="text-sm text-muted-foreground mt-0.5">All systems operational • Last scan 2 min ago</p>
      </div>
    </div>

    {/* Stat Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="glass rounded-xl p-5 hover:glow-primary transition-shadow duration-300 group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">{s.label}</span>
            <s.icon className={`h-5 w-5 ${s.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
          </div>
          <p className={`text-3xl font-bold gradient-text`}>{s.value}</p>
        </div>
      ))}
    </div>

    {/* AI Insight */}
    <div className="glass rounded-xl p-5 gradient-border glow-accent">
      <div className="flex items-start gap-3">
        <AiBot size={32} thinking />
        <div>
          <h3 className="font-semibold text-foreground mb-1">AI Insight</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pipeline <span className="text-accent">"Electronics Assembly Q1"</span> shows a 12% improvement in compliance
            over the past 30 days. Worker <span className="text-accent">Fatima</span> has the highest individual score at 96%.
            Consider applying her workflow patterns to other team members.
          </p>
        </div>
      </div>
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Compliance Trend */}
      <div className="glass rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Compliance Trend</h3>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={complianceData}>
            <defs>
              <linearGradient id="compGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(239, 84%, 67%)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="hsl(239, 84%, 67%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(228, 25%, 18%)" />
            <XAxis dataKey="month" stroke="hsl(220, 15%, 55%)" fontSize={12} />
            <YAxis stroke="hsl(220, 15%, 55%)" fontSize={12} domain={[75, 100]} />
            <Tooltip
              contentStyle={{
                background: "hsl(228, 40%, 10%)",
                border: "1px solid hsl(228, 25%, 18%)",
                borderRadius: "8px",
                color: "hsl(220, 20%, 90%)",
              }}
            />
            <Area type="monotone" dataKey="value" stroke="hsl(239, 84%, 67%)" fill="url(#compGrad)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Worker Performance */}
      <div className="glass rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Worker Performance</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={workerData}>
            <defs>
              <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(187, 85%, 53%)" />
                <stop offset="100%" stopColor="hsl(239, 84%, 67%)" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(228, 25%, 18%)" />
            <XAxis dataKey="name" stroke="hsl(220, 15%, 55%)" fontSize={12} />
            <YAxis stroke="hsl(220, 15%, 55%)" fontSize={12} domain={[70, 100]} />
            <Tooltip
              contentStyle={{
                background: "hsl(228, 40%, 10%)",
                border: "1px solid hsl(228, 25%, 18%)",
                borderRadius: "8px",
                color: "hsl(220, 20%, 90%)",
              }}
            />
            <Bar dataKey="score" fill="url(#barGrad)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default Dashboard;
