import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function AddProject() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full bg-gray-100 min-h-screen">
        <Navbar />

        <main className="p-6 max-w-3xl">
          <h1 className="text-2xl font-bold mb-6">
            Add New Project
          </h1>

          <form className="bg-white p-6 rounded-xl shadow space-y-4">
            <div>
              <label className="block mb-1 font-medium">
                Project Title
              </label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder="Portfolio Website"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Tech Stack
              </label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder="React, Tailwind"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Project Description
              </label>
              <textarea
                className="w-full border p-2 rounded"
                rows="4"
                placeholder="Project details..."
              ></textarea>
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Live URL
              </label>
              <input
                type="url"
                className="w-full border p-2 rounded"
              />
            </div>

            <button className="bg-green-600 text-white px-6 py-2 rounded">
              Save Project
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
