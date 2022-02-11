import { GetOponentService } from "../services/GetOponentService.js";

class GetOponentController{
    async handle(request, response){

        const service = new GetOponentService();

        const result = await service.execute();
        
        return response.json(result);
    }
}

export { GetOponentController};

