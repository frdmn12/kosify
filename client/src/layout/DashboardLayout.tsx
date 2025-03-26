import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import { Outlet } from "react-router-dom";

export default function DashBoardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-2">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
