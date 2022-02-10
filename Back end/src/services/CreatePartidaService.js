import prismaClient from "../prisma/index.js";
import {io} from "../app.js";

class CreatePartidaService{
    async execute(id, duracao, data, idPerdedor, idVencedor){
        const partida = await prismaClient.partida.create({
            data:{
                id,
                data,
                duracao,
                idPerdedor,
                idVencedor
            },
            /*include:{
                jogador: true
            }*/
        });

        const infoWS = {
            id: id,
            duracao: parseInt(duracao),
            data: data,
            idVencedor: idVencedor,
            idPerdedor: idPerdedor
        }

        io.emit("nova_partida");

        return partida;
    }
}

export { CreatePartidaService};
