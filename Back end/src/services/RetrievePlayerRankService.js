import prismaClient from "../prisma/index.js";

class RetrievePlayerRankService{
    async execute(id){
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
        })

        for(let i=0; i < ranking.length; i++){
            if(ranking[i].id === id){
                return i+1;
            }
        }

    }
}

export { RetrievePlayerRankService }