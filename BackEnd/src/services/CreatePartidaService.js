import prismaClient from "../prisma/index.js";

class CreatePartidaService{
    async execute(id, duracao, idPerdedor, idVencedor){
        const partida = await prismaClient.partida.create({
            data:{
                id,
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
