import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full pt-10 lg:pt-20 flex flex-col lg:flex-row items-center justify-center gap-10">
      <div className="min-w-md bg-white rounded-2xl p-10 shadow-lg flex flex-col gap-6">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Good Layout example
        </h2>
        <Link
          href="/good"
          className="text-center bg-sky-500 px-4 py-3 rounded-2xl text-white font-semibold hover:bg-sky-600 transition"
        >
          Go to Good Layout
        </Link>
      </div>
      <div className="min-w-md bg-white rounded-2xl p-10 shadow-lg flex flex-col gap-6">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Bad Layout example
        </h2>
        <Link
          href="/bad"
          className="text-center bg-rose-500 px-4 py-3 rounded-2xl text-white font-semibold hover:bg-rose-600 transition"
        >
          Go to Bad Layout
        </Link>
      </div>
    </div>
  );
}
