import { RetrieveJogadoresRealService } from "../services/RetrieveJogadoresRealService.js";

class RetrieveJogadoresRealController{
    async handle(request, response){
        const service = new RetrieveJogadoresRealService();

        const result = await service.execute();
        console.log(result)
        return response.json(result);
    }
}

export { RetrieveJogadoresRealController};