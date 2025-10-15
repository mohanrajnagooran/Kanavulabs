import { useEffect, useState } from "react";
import axios from "axios";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  const api = axios.create({
    baseURL: "http://localhost:5000/api/users",
    headers: { Authorization: `Bearer ${token}` },
  });

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await api.get("/");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle form submit (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update user (password optional)
        await api.put(`/${editingId}`, {
          name: form.name,
          email: form.email,
          ...(form.password ? { password: form.password } : {}),
        });
        alert("User updated");
      } else {
        // Create new user (password required)
        await api.post("/", form);
        alert("User created");
      }
      setForm({ name: "", email: "", password: "" });
      setEditingId(null);
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.error || "Error saving user"
      );
    }
  };

  // Handle edit button click
  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, password: "" });
    setEditingId(user._id);
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    try {
      await api.delete(`/${id}`);
      alert("User deleted");
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert("Error deleting user");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* User form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow mb-6 space-y-3"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        {!editingId && (
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        )}
        {editingId && (
          <input
            type="password"
            placeholder="New Password (leave blank to keep current)"
            className="w-full border p-2 rounded"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        )}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingId ? "Update User" : "Create User"}
        </button>
      </form>

      {/* Users table */}
      <table className="w-full border-collapse bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="border-t">
              <td className="p-2 border">{u.name}</td>
              <td className="p-2 border">{u.email}</td>
              <td className="p-2 border">{u.role}</td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => handleEdit(u)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(u._id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="4" className="p-2 text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
