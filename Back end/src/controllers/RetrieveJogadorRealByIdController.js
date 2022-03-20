import { RetrieveJogadorRealByIdService } from "../services/RetrieveJogadorRealByIdService.js";

class RetrieveJogadorRealByIdController{
    async handle(request, response){
        const {nome} = request.params;

        const service = new RetrieveJogadorRealByIdService();

        const result = await service.execute(nome);
        
        return response.json(result);
    }
}

export { RetrieveJogadorRealByIdController};