import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import { Outlet } from "react-router-dom";
import DashboardHeader from "@/pages/Dashboard/components/DashboardHeader";

export default function DashBoardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <DashboardHeader />
        <div className="flex flex-col gap-2 p-2">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
