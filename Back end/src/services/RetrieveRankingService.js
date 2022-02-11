import prismaClient from "../prisma/index.js";

class RetrieveRankingService{
    async execute(){
        const ranking = await prismaClient.jogador.findMany({
            orderBy: [
                {
                    vitorias: 'desc',
                },
                {
                    derrotas: 'asc',
                },
                {
                    nome: 'asc',
                },
            ],
            take: 10,
            
        });

        return {ranking};
    }
}

export { RetrieveRankingService };