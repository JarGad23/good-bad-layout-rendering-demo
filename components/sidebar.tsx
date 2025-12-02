import Link from "next/link";

export default function Sidebar({ userSlot }: { userSlot: React.ReactNode }) {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 flex flex-col p-6">
      <div className="text-2xl font-bold mb-8">DemoApp 🚀</div>
      <nav className="flex flex-col gap-2 mb-auto">
        <Link
          href="/bad"
          className="p-2 hover:bg-gray-800 rounded text-red-300"
        >
          ❌ Wersja Bad
        </Link>
        <Link
          href="/good"
          className="p-2 hover:bg-gray-800 rounded text-green-300"
        >
          ✅ Wersja Good
        </Link>
      </nav>
      <div className="bg-gray-800 p-4 rounded-lg">{userSlot}</div>
    </aside>
  );
}
