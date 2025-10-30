export default function Navbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">Dashboard Overview</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1"
        />
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
