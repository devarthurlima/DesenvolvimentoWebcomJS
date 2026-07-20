import { Router } from "express";
import {
  buscarClientePeloId,
  listarClientes,
  criarClientes,
  deletarClientePeloId,
} from "../controllers/clienteController.js";

const router = Router();

router.get("/", (req, res) => listarClientes(req, res));
router.get("/:id", (req, res) => buscarClientePeloId(req, res));
router.post("/", (req, res) => criarClientes(req, res));
router.delete("/:id", (req, res) => deletarClientePeloId(req, res));

export default router;
