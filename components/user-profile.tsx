import { getUserProfile } from "@/lib/data";
import Image from "next/image";

export default async function UserProfile() {
  const user = await getUserProfile();

  return (
    <div className="mt-auto p-4 bg-gray-800 rounded-lg flex items-center gap-3 z-50">
      <Image alt="avatar" src={user.avatar} width={48} height={48} />
      <div>
        <div className="font-bold text-sm">{user.name}</div>
        <div className="text-xs text-gray-400">{user.role}</div>
      </div>
    </div>
  );
}
