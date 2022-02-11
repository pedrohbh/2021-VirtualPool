import { RetrievePartidasByIdService } from "../services/RetrievePartidasByIdService.js";

class RetrievePartidasByIdController{
    async handle(request, response){
        const { duracao } = request.body;

        const {id} = request;

        const service = new RetrievePartidasByIdService();

        const result = await service.execute(id);
        
        return response.json(result);
    }
}

export { RetrievePartidasByIdController};