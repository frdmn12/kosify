import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { CustomSideBarMenu } from "./SideBarMenu";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <CustomSideBarMenu />
      </SidebarContent>
    </Sidebar>
  );
}
