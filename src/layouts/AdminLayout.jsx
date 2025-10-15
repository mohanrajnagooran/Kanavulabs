import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AdminLayout() {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUserRole(parsedUser.role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // clear user info too
    navigate("/admin");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive ? "bg-gray-900 font-semibold" : "hover:bg-gray-700"
              }`
            }
          >
            Dashboard
          </NavLink>

          {/* Only show for admins */}
          {userRole === "admin" && (
            <NavLink
              to="users"
              className={({ isActive }) =>
                `block px-3 py-2 rounded ${
                  isActive ? "bg-gray-900 font-semibold" : "hover:bg-gray-700"
                }`
              }
            >
              User Management
            </NavLink>
          )}
          {userRole === "admin" && (
          <NavLink to="footer" className="block px-3 py-2 hover:bg-gray-700">
            Edit Footer
          </NavLink>
          )}

          <NavLink
            to="website"
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${
                isActive ? "bg-gray-900 font-semibold" : "hover:bg-gray-700"
              }`
            }
          >
            Website Content
          </NavLink>
        </nav>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white p-3 m-4 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet /> {/* Loads admin child routes here */}
      </main>
    </div>
  );
}

export default AdminLayout;
