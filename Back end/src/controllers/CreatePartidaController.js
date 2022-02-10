import { CreatePartidaService } from "../services/CreatePartidaService.js";

class CreatePartidaController{
    async handle(request, response){
        const { duracao } = request.body; //ta retornando undefined

        const {id} = request;

        const service = new CreatePartidaService();

        const idpartida = Math.floor(Math.random() * 100000001).toString();

        var dt = new Date( Date.now() - 1000 * (60 * parseInt(duracao)));
        dt.setHours(dt.getHours() - 3);

        const result = await service.execute(idpartida, parseInt(duracao), dt, id, id);
        
        return response.json(result);
    }
}

export { CreatePartidaController};
