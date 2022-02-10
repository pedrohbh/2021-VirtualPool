import prismaClient from "../prisma/index.js";
import { CreatePartidaService } from "../services/CreatePartidaService.js";

class CreatePartidaController{
    async handle(request, response){
        const { partida } = request.body

        console.log(partida);
        const {id} = request;

        const service = new CreatePartidaService();

        const result = await service.execute("1", 10, id, id);

        return response.json(result);
    }
}

export { CreatePartidaController};
