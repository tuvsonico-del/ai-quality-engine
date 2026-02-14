import { useState } from "react";
import { cn } from "@/lib/utils";
import { Building2, Bell, Shield } from "lucide-react";

const tabs = [
  { id: "company", label: "Company", icon: Building2 },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
];

const SettingsPage = () => {
  const [tab, setTab] = useState("company");

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your workspace preferences</p>
      </div>

      <div className="flex gap-6">
        {/* Settings Sidebar */}
        <div className="w-48 space-y-1 shrink-0">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm transition-all",
                tab === t.id ? "bg-primary/15 text-foreground glow-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
              )}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 glass rounded-xl p-6 space-y-6">
          {tab === "company" && (
            <>
              <h2 className="text-lg font-semibold text-foreground">Company Settings</h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Company Name</label>
                  <input defaultValue="NeuroQual Industries" className="w-full px-3 py-2.5 rounded-lg bg-secondary/60 border border-border/50 text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Industry</label>
                  <input defaultValue="Manufacturing" className="w-full px-3 py-2.5 rounded-lg bg-secondary/60 border border-border/50 text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Timezone</label>
                  <input defaultValue="UTC+3 (Arabia Standard)" className="w-full px-3 py-2.5 rounded-lg bg-secondary/60 border border-border/50 text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" />
                </div>
              </div>
            </>
          )}
          {tab === "notifications" && (
            <>
              <h2 className="text-lg font-semibold text-foreground">Notification Preferences</h2>
              <div className="space-y-4 max-w-md">
                {["AI Risk Alerts", "Cycle Completions", "Staff Performance Updates", "Weekly Reports"].map((n) => (
                  <div key={n} className="flex items-center justify-between py-2">
                    <span className="text-sm text-foreground">{n}</span>
                    <div className="w-10 h-6 rounded-full bg-primary/30 relative cursor-pointer">
                      <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-accent transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {tab === "security" && (
            <>
              <h2 className="text-lg font-semibold text-foreground">Security</h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Current Password</label>
                  <input type="password" className="w-full px-3 py-2.5 rounded-lg bg-secondary/60 border border-border/50 text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">New Password</label>
                  <input type="password" className="w-full px-3 py-2.5 rounded-lg bg-secondary/60 border border-border/50 text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all" />
                </div>
                <button className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                  Update Password
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
