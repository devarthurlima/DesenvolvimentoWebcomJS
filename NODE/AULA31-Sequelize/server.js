import express from "express";
import clienteRoutes from "./routes/clienteRoutes.js";

const app = express();

app.use(express.json());

app.use('/api/clientes', clienteRoutes);

app.listen(8080, () => {
  console.log("Serve is running on port 8080");
});
