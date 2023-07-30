import { Metadata } from "next";
import Image from "next/image";
import { SidebarNav } from "@/components/sidebar-nav";
import UserAccountNav from "@/components/user-account-nav";
import DashboardNav from "@/components/dashboard-nav";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Contracts",
    href: "/contracts",
  },
  {
    title: "Emails",
    href: "/emails",
  },
  {
    title: "Calendar",
    href: "/calendar",
  },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="space-y-6 p-10 pb-16 md:block">
        <DashboardNav />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    )
}