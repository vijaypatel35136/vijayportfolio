import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white fixed">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>

      <nav className="mt-6 flex flex-col gap-2 px-4">
        <NavLink
          to="/admin"
          className="p-3 rounded hover:bg-gray-700"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/projects"
          className="p-3 rounded hover:bg-gray-700"
        >
          Projects
        </NavLink>

        <NavLink
          to="/admin/skills"
          className="p-3 rounded hover:bg-gray-700"
        >
          Skills
        </NavLink>

        <NavLink
          to="/admin/messages"
          className="p-3 rounded hover:bg-gray-700"
        >
          Messages
        </NavLink>
      </nav>
    </aside>
  );
}
