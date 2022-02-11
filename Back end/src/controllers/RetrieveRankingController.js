import { RetrieveRankingService } from "../services/RetrieveRankingService.js";

class RetrieveRankingController{
    async handle(request, response){
        const service = new RetrieveRankingService();

        const result = await service.execute();
        
        return response.json(result);
    }
}

export { RetrieveRankingController};