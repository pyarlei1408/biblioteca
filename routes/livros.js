import { Router } from "express";
import controller from "../controllers/livrosController.js";

const router = Router();

router.get("/", controller.listar);

router.get("/cadastrar", controller.formularioCadastrar);

router.post("/", controller.cadastrar);

router.get("/editar/:id", controller.formularioEditar);

router.post("/editar/:id", controller.editar);

router.post("/excluir/:id", controller.excluir);

export default router;
