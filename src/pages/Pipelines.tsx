import { useState } from "react";
import { Plus, ChevronDown, ChevronRight, FileText, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const pipelines = [
  { id: 1, name: "Electronics Assembly Q1", status: "Active", forms: 8, updated: "2 hours ago", submissions: 142 },
  { id: 2, name: "Packaging Line B", status: "Active", forms: 5, updated: "1 day ago", submissions: 89 },
  { id: 3, name: "Safety Inspection", status: "Draft", forms: 3, updated: "3 days ago", submissions: 0 },
  { id: 4, name: "Raw Materials QC", status: "Active", forms: 6, updated: "5 hours ago", submissions: 67 },
];

const Pipelines = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Pipelines</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your quality inspection pipelines</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-primary">
          <Plus className="h-4 w-4" /> New Pipeline
        </button>
      </div>

      <div className="glass rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left px-5 py-3.5 text-muted-foreground font-medium">Name</th>
              <th className="text-left px-5 py-3.5 text-muted-foreground font-medium">Status</th>
              <th className="text-left px-5 py-3.5 text-muted-foreground font-medium">Forms</th>
              <th className="text-left px-5 py-3.5 text-muted-foreground font-medium">Submissions</th>
              <th className="text-left px-5 py-3.5 text-muted-foreground font-medium">Updated</th>
              <th className="px-5 py-3.5" />
            </tr>
          </thead>
          <tbody>
            {pipelines.map((p) => (
              <>
                <tr
                  key={p.id}
                  onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                  className="border-b border-border/30 hover:bg-secondary/40 cursor-pointer transition-colors group"
                >
                  <td className="px-5 py-4 flex items-center gap-2">
                    {expanded === p.id ? <ChevronDown className="h-4 w-4 text-accent" /> : <ChevronRight className="h-4 w-4 text-muted-foreground" />}
                    <span className="font-medium text-foreground">{p.name}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-medium",
                      p.status === "Active" ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"
                    )}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{p.forms}</td>
                  <td className="px-5 py-4 text-muted-foreground">{p.submissions}</td>
                  <td className="px-5 py-4 text-muted-foreground">{p.updated}</td>
                  <td className="px-5 py-4">
                    <MoreHorizontal className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </td>
                </tr>
                {expanded === p.id && (
                  <tr key={`${p.id}-exp`}>
                    <td colSpan={6} className="px-10 py-4 bg-secondary/20">
                      <div className="space-y-2">
                        {["Incoming Inspection", "In-Process Check", "Final QC"].map((f) => (
                          <div key={f} className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-card/40 hover:bg-card/60 transition-colors">
                            <FileText className="h-4 w-4 text-accent" />
                            <span className="text-sm text-foreground">{f}</span>
                            <span className="ml-auto text-xs text-muted-foreground">12 fields</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pipelines;
