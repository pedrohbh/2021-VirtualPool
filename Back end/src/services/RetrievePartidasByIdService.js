import prismaClient from "../prisma/index.js";

class RetrievePartidasByIdService{
    async execute(id){
        const partidas = await prismaClient.jogador.findMany({
            take: 6,
            where:{
                id: id
            }
        });

        return {partidas};
    }
}

export { RetrievePartidasByIdService };

