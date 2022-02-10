import prismaClient from "../prisma/index.js";

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
        return partida;
    }
}

export { CreatePartidaService};
