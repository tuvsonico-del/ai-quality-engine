import {
  LayoutDashboard, GitBranch, RefreshCw, Users, BarChart3, Settings, Bell, ChevronLeft,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import AiBot from "./AiBot";
import { useState } from "react";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Pipelines", url: "/pipelines", icon: GitBranch },
  { title: "Cycles", url: "/cycles", icon: RefreshCw },
  { title: "Staff", url: "/staff", icon: Users },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen z-40 flex flex-col glass-strong transition-all duration-300",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 h-16 border-b border-border/50">
        <AiBot size={28} />
        {!collapsed && <span className="font-bold text-lg gradient-text">NeuroQual</span>}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.url}
            to={item.url}
            end={item.url === "/"}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all duration-200 group"
            activeClassName="bg-primary/15 text-foreground glow-primary"
          >
            <item.icon className="h-5 w-5 shrink-0 group-hover:text-accent transition-colors" />
            {!collapsed && <span className="text-sm font-medium">{item.title}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-border/50 p-3 space-y-2">
        <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all">
          <Bell className="h-5 w-5 shrink-0" />
          {!collapsed && <span className="text-sm">Notifications</span>}
          {!collapsed && (
            <span className="ml-auto text-xs bg-primary/20 text-accent px-1.5 py-0.5 rounded-full">3</span>
          )}
        </button>

        {/* User */}
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-accent shrink-0">
            AK
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">Ahmed K.</p>
              <p className="text-xs text-muted-foreground">CEO</p>
            </div>
          )}
        </div>

        {/* Collapse */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center w-full py-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-all"
        >
          <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
