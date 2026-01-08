import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import StatCard from "../../components/StatCard";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full bg-gray-100 min-h-screen">
        <Navbar />

        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Total Projects" value="12" />
            <StatCard title="Skills" value="18" />
            <StatCard title="Messages" value="5" />
          </div>

          <div className="mt-10 bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">
              Recent Activity
            </h2>
            <p className="text-gray-500">
              Portfolio admin panel ready 🚀
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
