import { fetchData } from "../services/apiService.js";

export const getUsers = async (req, res) => {
  try {
    let users = await fetchData(
      "https://jsonplaceholder.typicode.com/users",
      "users"
    );

    res.json({ success: true, count: users.length, data: users });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    let users = await fetchData(
      "https://jsonplaceholder.typicode.com/users",
      "users"
    );

    const user = users.find((u) => u.id == id);

    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
