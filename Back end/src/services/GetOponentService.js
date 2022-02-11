import prismaClient from "../prisma/index.js";

class GetOponentService{
    async execute(){
        const jogador = await prismaClient.jogador.findMany({
            
        });
        var op = jogador[Math.floor(Math.random() * jogador.length)];
    
        return {op};
    }
}

export { GetOponentService };
