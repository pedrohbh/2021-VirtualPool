import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController.js";
import { CreatePartidaController } from "./controllers/CreatePartidaController.js";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated.js";
import { RetrieveRankingController } from "./controllers/RetrieveRankingController.js";
import { RetrievePlayerRankController } from "./controllers/RetrievePlayerRankController.js";
import { RetrieveUserByIdController } from "./controllers/RetrieveUserByIdController.js";
import { RetrievePartidasByIdController } from "./controllers/RetrievePartidasByIdController.js";
import { GetOponentController } from "./controllers/GetOponentController.js";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/partida", ensureAuthenticated, new CreatePartidaController().handle);

router.get("/ranking", new RetrieveRankingController().handle);

router.get("/perfil", ensureAuthenticated, new RetrieveUserByIdController().handle);

router.get("/matchHist", ensureAuthenticated, new RetrievePartidasByIdController().handle);

router.get("/oponent", new GetOponentController().handle);

router.get("/playerRank", ensureAuthenticated, new RetrievePlayerRankController().handle);

export { router }