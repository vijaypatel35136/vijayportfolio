import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full bg-gray-100 min-h-screen">
        <Navbar />

        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Projects</h1>

            <Link
              to="/admin/projects/add"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              + Add Project
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4">Title</th>
                  <th className="p-4">Tech Stack</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-4">Portfolio Website</td>
                  <td className="p-4">React, Tailwind</td>
                  <td className="p-4 flex gap-3">
                    <button className="text-blue-600">Edit</button>
                    <button className="text-red-600">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
