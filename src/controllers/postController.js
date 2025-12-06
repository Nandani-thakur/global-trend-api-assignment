import { fetchData } from "../services/apiService.js";

export const getPosts = async (req, res) => {
  try {
    const { userId } = req.query;

    let posts = await fetchData(
      "https://jsonplaceholder.typicode.com/posts",
      "posts"
    );

    if (userId) {
      posts = posts.filter((p) => p.userId == userId);
    }

    res.json({ success: true, count: posts.length, data: posts });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    let posts = await fetchData(
      "https://jsonplaceholder.typicode.com/posts",
      "posts"
    );

    const post = posts.find((p) => p.id == id);

    if (!post) return res.status(404).json({ error: "Post not found" });

    res.json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
};
