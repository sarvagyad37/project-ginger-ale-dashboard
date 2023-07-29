import Link from "next/link"

import { landingConfig } from "@/config/landing"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { getAuthSession } from "@/lib/auth"

interface LandingLayoutProps {
  children: React.ReactNode
}

export default async function LandingLayout({
  children,
}: LandingLayoutProps) {
  
  const session = await getAuthSession()
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={landingConfig.mainNav} />
          <nav>

            {session ? (
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "px-4"
                )}
              >
                Dashboard
              </Link>
            ) : (
              
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>
            )}
            
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  )
}