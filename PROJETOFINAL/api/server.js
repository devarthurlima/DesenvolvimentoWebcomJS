import express from "express";
import cors from "cors";
import alunoRoutes from "./src/routes/alunoRoutes.js";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/alunos", alunoRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
