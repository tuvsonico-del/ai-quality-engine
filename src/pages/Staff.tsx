import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const staff = [
  { name: "Ahmed Khalil", role: "CEO", status: "online", initials: "AK", score: 94 },
  { name: "Sara Al-Rashid", role: "Supervisor", status: "online", initials: "SA", score: 88 },
  { name: "Omar Hassan", role: "Worker", status: "offline", initials: "OH", score: 91 },
  { name: "Fatima Noor", role: "Worker", status: "online", initials: "FN", score: 96 },
  { name: "Khalid Mansour", role: "Supervisor", status: "online", initials: "KM", score: 85 },
  { name: "Layla Ibrahim", role: "Worker", status: "offline", initials: "LI", score: 79 },
];

const roleBadge: Record<string, string> = {
  CEO: "bg-primary/20 text-primary",
  Supervisor: "bg-accent/15 text-accent",
  Worker: "bg-muted text-muted-foreground",
};

const Staff = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Staff</h1>
        <p className="text-sm text-muted-foreground mt-1">Team members and performance</p>
      </div>
      <div className="flex items-center gap-2 glass rounded-lg px-3 py-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input placeholder="Search staff..." className="bg-transparent text-sm outline-none placeholder:text-muted-foreground w-48" />
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {staff.map((s) => (
        <div key={s.name} className="glass rounded-xl p-5 hover:glow-primary transition-all duration-300 cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-accent group-hover:scale-105 transition-transform">
                {s.initials}
              </div>
              <div className={cn(
                "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-card",
                s.status === "online" ? "bg-success" : "bg-muted-foreground/40"
              )} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-foreground truncate">{s.name}</p>
              <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", roleBadge[s.role])}>
                {s.role}
              </span>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold gradient-text">{s.score}</p>
              <p className="text-xs text-muted-foreground">Score</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Staff;
