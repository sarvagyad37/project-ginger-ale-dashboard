import { getAuthSession } from "@/lib/auth";
import { Separator } from "@/components/ui/separator";
import UserAccountNav from "@/components/user-account-nav";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const DashboardNav = async () => {
  const session = await getAuthSession();

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Manage your dashboard.</p>
        </div>
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="/login" className={buttonVariants()}>
            Sign in
          </Link>
        )}
      </div>
      <Separator className="my-6" />
    </>
  );
};

export default DashboardNav;
