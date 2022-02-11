import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController.js";
import { CreatePartidaController } from "./controllers/CreatePartidaController.js";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated.js";
import { RetrieveRankingController } from "./controllers/RetrieveRankingController.js";
import { RetrieveUserByIdController } from "./controllers/RetrieveUserByIdController.js";
import { RetrievePartidasByIdController } from "./controllers/RetrievePartidasByIdController.js";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/partida", ensureAuthenticated, new CreatePartidaController().handle);

router.post("/ranking", new RetrieveRankingController().handle);

router.post("/perfil", ensureAuthenticated, new RetrieveUserByIdController().handle);

router.post("/matchHist", ensureAuthenticated, new RetrievePartidasByIdController().handle);

export { router }