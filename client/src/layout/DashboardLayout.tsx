import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
import { Outlet } from "react-router-dom";

export default function DashBoardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
