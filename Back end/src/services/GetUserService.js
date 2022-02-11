import prismaClient from "../prisma/index.js";

class GetUserService{
    async execute(){
        const jogador = await prismaClient.jogador.findMany({
            take: 2
        });

        return {jogador};
    }
}

export { GetUserService };
