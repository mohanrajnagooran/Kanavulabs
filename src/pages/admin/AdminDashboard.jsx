// AdminDashboard.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content, file });
    alert("Content saved!");
    setTitle("");
    setContent("");
    setFile(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Website Content Management</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-400 rounded p-2"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-gray-400 rounded p-2 h-40"
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="border border-gray-400 rounded p-2"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded w-32"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
