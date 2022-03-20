import { RetrieveCampeoesRealService } from "../services/RetrieveCampeoesRealService.js";

class RetrieveCampeoesRealController{
    async handle(request, response){
        const service = new RetrieveCampeoesRealService();

        const result = await service.execute();
        
        return response.json(result);
    }
}

export { RetrieveCampeoesRealController };