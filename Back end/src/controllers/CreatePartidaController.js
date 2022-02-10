import { CreatePartidaService } from "../services/CreatePartidaService.js";
import { GetUserService } from "../services/GetUserService.js";



class CreatePartidaController{
    async handle(request, response){
        const { duracao } = request.body;

        const {id} = request;

        const idService = new GetUserService();

        const ids = idService.execute(); 
        const idPerdedor = ids[0];
        const idVencedor = ids[1];

        const service = new CreatePartidaService();

        const idpartida = Math.floor(Math.random() * 100000001).toString();

        var dt = new Date( Date.now() - 1000 * (60 * parseInt(duracao)));
        dt.setHours(dt.getHours() - 3);

        const result = await service.execute(idpartida, parseInt(duracao), dt, idPerdedor, idVencedor);
        
        return response.json(result);
    }
}

export { CreatePartidaController};
