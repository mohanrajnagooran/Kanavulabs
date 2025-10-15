import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contactus from "./pages/Contactus";
import Careers from "./pages/Careers";
import Comingsoon from "./pages/Comingsoon";
import Notfound from "./pages/Notfound";
import ScrollToTop from "./components/ScrollToTop";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./layouts/AdminLayout";
import UserManagement from "./pages/admin/UserManagement";
import AdminDashboard from "./pages/admin/AdminDashboard";
import WebsiteContent from "./pages/admin/WebsiteContent";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/comingsoon" element={<Comingsoon />} />
        <Route path="*" element={<Notfound />} />

        {/* Admin login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Admin layout with sidebar */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" index element={<AdminDashboard />} /> {/* default dashboard */}
          <Route path="users" element={<UserManagement />} />
          <Route path="website" element={<WebsiteContent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
