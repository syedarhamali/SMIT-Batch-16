import { Home, BarChart2, Settings } from "lucide-react";
import { Link } from "react-router";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-5 space-y-4">
      <h1 className="text-2xl font-bold mb-6">MyDashboard</h1>
      <nav className="space-y-3">
        <Link to="/dashboard" className="flex items-center gap-2 hover:text-yellow-400">
          <Home size={18}/> Dashboard
        </Link>
        <Link to="/analytics" className="flex items-center gap-2 hover:text-yellow-400">
          <BarChart2 size={18}/> Analytics
        </Link>
        <Link to="/settings" className="flex items-center gap-2 hover:text-yellow-400">
          <Settings size={18}/> Settings
        </Link>
      </nav>
    </aside>
  );
}
