import { RetrieveUserByIdService } from "../services/RetrieveUserByIdService.js";

class RetrieveUserByIdController{
    async handle(request, response){
        const { duracao } = request.body;

        const {id} = request;

        const service = new RetrieveUserByIdService();

        const result = await service.execute(id);
        
        return response.json(result);
    }
}

export { RetrieveUserByIdController};