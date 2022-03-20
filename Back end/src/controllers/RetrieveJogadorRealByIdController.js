import { RetrieveJogadorRealByIdService } from "../services/RetrieveJogadorRealByIdService.js";

class RetrieveJogadorRealByIdController{
    async handle(request, response){
        const {id} = request;

        const service = new RetrieveJogadorRealByIdService();

        const result = await service.execute(id);
        
        return response.json(result);
    }
}

export { RetrieveJogadorRealByIdController};