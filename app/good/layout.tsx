import Sidebar from "@/components/sidebar";
import { UserSkeleton } from "@/components/user-loading";
import UserProfile from "@/components/user-profile";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function GoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Sidebar
        userSlot={
          <Suspense fallback={<UserSkeleton />}>
            <UserProfile />
          </Suspense>
        }
      />
      {children}
    </div>
  );
}
