import { useNavigate } from "react-router-dom";

function WebsiteContent() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      {/* <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 text-white px-3 py-2 rounded mb-4 w-max"
      >
        Back to Admin Panel
      </button> */}

      <iframe
        src="http://localhost:5173/"  // Replace with your website URL
        title="Website Content"
        className="flex-1 w-full border rounded"
      />
    </div>
  );
}

export default WebsiteContent;
