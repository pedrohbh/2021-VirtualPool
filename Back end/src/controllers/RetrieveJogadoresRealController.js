import { RetrieveJogadoresRealService } from "../services/RetrieveJogadoresRealService.js";

class RetrieveJogadoresRealController{
    async handle(request, response){
        const service = new RetrieveJogadoresRealService();

        const result = await service.execute();
        return response.json(result);
    }
}

export { RetrieveJogadoresRealController};