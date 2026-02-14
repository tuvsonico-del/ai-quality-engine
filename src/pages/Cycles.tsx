import { cn } from "@/lib/utils";
import AiBot from "@/components/AiBot";

const cycles = [
  { id: 1, name: "Cycle #2024-Q1-001", pipeline: "Electronics Assembly", status: "Running", aiScore: 92, submissions: 45, created: "Jan 15, 2026" },
  { id: 2, name: "Cycle #2024-Q1-002", pipeline: "Packaging Line B", status: "Completed", aiScore: 87, submissions: 30, created: "Jan 10, 2026" },
  { id: 3, name: "Cycle #2024-Q1-003", pipeline: "Safety Inspection", status: "Risk", aiScore: 64, submissions: 12, created: "Jan 20, 2026" },
  { id: 4, name: "Cycle #2024-Q1-004", pipeline: "Raw Materials QC", status: "Running", aiScore: 95, submissions: 28, created: "Feb 01, 2026" },
];

const statusStyles: Record<string, string> = {
  Running: "bg-accent/15 text-accent glow-accent",
  Completed: "bg-success/15 text-success",
  Risk: "bg-destructive/15 text-destructive glow-danger",
};

const scoreColor = (s: number) => s >= 90 ? "text-success" : s >= 75 ? "text-warning" : "text-destructive";

const Cycles = () => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Cycles</h1>
      <p className="text-sm text-muted-foreground mt-1">Monitor production cycle quality and AI scoring</p>
    </div>

    <div className="glass rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/50">
            <th className="text-left px-5 py-3.5 text-muted-foreground font-medium">Cycle</th>
            <th className="text-left px-5 py-3.5 text-muted-foreground font-medium">Pipeline</th>
            <th className="text-left px-5 py-3.5 text-muted-foreground font-medium">Status</th>
            <th className="text-left px-5 py-3.5 text-muted-foreground font-medium">AI Score</th>
            <th className="text-left px-5 py-3.5 text-muted-foreground font-medium">Submissions</th>
            <th className="text-left px-5 py-3.5 text-muted-foreground font-medium">Created</th>
          </tr>
        </thead>
        <tbody>
          {cycles.map((c) => (
            <tr key={c.id} className="border-b border-border/30 hover:bg-secondary/40 cursor-pointer transition-colors">
              <td className="px-5 py-4 font-medium text-foreground">{c.name}</td>
              <td className="px-5 py-4 text-muted-foreground">{c.pipeline}</td>
              <td className="px-5 py-4">
                <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium", statusStyles[c.status])}>
                  {c.status}
                </span>
              </td>
              <td className="px-5 py-4">
                <span className={cn("font-bold text-lg", scoreColor(c.aiScore))}>{c.aiScore}</span>
              </td>
              <td className="px-5 py-4 text-muted-foreground">{c.submissions}</td>
              <td className="px-5 py-4 text-muted-foreground">{c.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* AI Summary */}
    <div className="glass rounded-xl p-5 gradient-border">
      <div className="flex items-start gap-3">
        <AiBot size={28} />
        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-medium">AI Summary:</span> 1 cycle flagged as
          <span className="text-destructive font-medium"> Risk</span>. Safety Inspection cycle shows declining compliance.
          Recommend immediate supervisor review.
        </p>
      </div>
    </div>
  </div>
);

export default Cycles;
