import Sidebar from "@/components/sidebar";
import UserProfile from "@/components/user-profile";

export default async function BadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Sidebar userSlot={<UserProfile />} />
      {children}
    </div>
  );
}
