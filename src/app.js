import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Global Trend API Assignment Running...");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
