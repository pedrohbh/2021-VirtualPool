import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController.js";
import { CreatePartidaController } from "./controllers/CreatePartidaController.js";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated.js";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/partida", ensureAuthenticated, new CreatePartidaController().handle)

export { router }