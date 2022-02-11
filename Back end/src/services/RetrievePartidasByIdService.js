import prismaClient from "../prisma/index.js";

class RetrievePartidasByIdService{
    async execute(id){
        const partidas = await prismaClient.partida.findMany({
            orderBy: {
                data: 'desc',
            },
            take: 6,
            where:{
                OR: [
                    {
                        idVencedor: id
                    },
                    {
                        idPerdedor: id
                    }
                  ],
            }
        });

        return {partidas};
    }
}

export { RetrievePartidasByIdService };

