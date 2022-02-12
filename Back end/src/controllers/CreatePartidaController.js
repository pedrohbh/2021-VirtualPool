import { CreatePartidaService } from "../services/CreatePartidaService.js";



class CreatePartidaController{
    async handle(request, response){
        const { duracao , idOP, nomeOP} = request.body;

        const {id, nome} = request;

        const service = new CreatePartidaService();

        const result = await service.execute(parseInt(duracao), idOP, nomeOP, id, nome);

        return response.json(result);
    }
}

export { CreatePartidaController};
