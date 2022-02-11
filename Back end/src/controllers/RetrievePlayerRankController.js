import { RetrievePlayerRankService } from '../services/RetrievePlayerRankService.js'

class RetrievePlayerRankController{
    async handle(request, response) {
        const { duracao } = request.body;

        const {id} = request;

        const service = new RetrievePlayerRankService();

        const result = await service.execute(id);

        return response.json(result);
    }
}

export { RetrievePlayerRankController }