
import { Outlet } from "react-router";
import Sidebar from "../sidebar";
import Navbar from "../navbar";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100 min-h-screen">
        <Navbar/>
        <main className="flex-1 p-6"><Outlet /></main>
        <footer className="bg-gray-900 text-white text-center py-3">
          © 2025 Arham. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
