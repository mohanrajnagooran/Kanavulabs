import API from "./api";

export const fetchFooter = async () => {
  const res = await API.get("/footer");
  return res.data;
};

export const updateFooter = async (data, token) => {
  const res = await API.post("/footer", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// 👇 add default export
export default { fetchFooter, updateFooter };
