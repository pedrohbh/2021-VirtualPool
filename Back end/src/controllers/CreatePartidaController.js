import { CreatePartidaService } from "../services/CreatePartidaService.js";
import { GetUserService } from "../services/GetUserService.js";



class CreatePartidaController{
    async handle(request, response){
        const { duracao , idOP, nomeop} = request.body;

        const {id, nome} = request;

        const service = new CreatePartidaService();

        const result = await service.execute(parseInt(duracao), idOP, nomeop, id, nome);

        return response.json(result);
    }
}

export { CreatePartidaController};
