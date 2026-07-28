import { Router } from "express";

import {
  listarAlunos,
  criarAluno,
  removerAluno,
  atualizarAluno,
  buscarAlunoPorId,
} from "../controllers/clienteController.js";

const router = Router();
router.get("/", listarAlunos);
router.get("/:id", buscarAlunoPorId);
router.post("/", criarAluno);
router.put("/:id", atualizarAluno);
router.delete("/:id", removerAluno);

export default router;
