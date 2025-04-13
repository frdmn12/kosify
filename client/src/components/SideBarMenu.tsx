import {
  Bed,
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Icons } from "./Icons";
import { FaMoneyBill } from "react-icons/fa6";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard/home",
    icon: Home,
  },
  {
    title: "Properties",
    url: "/dashboard/properties",
    icon: Inbox,
  },
  {
    title: "Rooms",
    url: "/dashboard/rooms",
    icon: Bed,
  },
  {
    title: "Payments",
    url: "/dashboard/payments",
    icon: FaMoneyBill,
  },
  {
    title: "Renters",
    url: "/dashboard/renters",
    icon: User2,
  },
];

export function CustomSideBarMenu() {
  return (
    <Sidebar>
      <SidebarHeader className="overflow-hidden">
        <div className="flex items-center text-left justify-center h-16 w-full text-gray-900 dark:text-gray-100">
          <Icons.logo className="h-4 w-4" />
          <span className="text-lg font-bold tracking-tight">Kosify</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>
            <Icons.logo className="h-4 w-4" />
            Kosify App
          </SidebarGroupLabel> */}
          <SidebarGroupLabel >
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton variant={"outline"}>
                  Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
