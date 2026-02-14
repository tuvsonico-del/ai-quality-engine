import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";

const AppLayout = () => (
  <div className="min-h-screen neural-bg floating-particles">
    <AppSidebar />
    <main className="ml-60 min-h-screen p-6 transition-all duration-300">
      <Outlet />
    </main>
  </div>
);

export default AppLayout;
