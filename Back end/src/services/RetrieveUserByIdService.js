import prismaClient from "../prisma/index.js";

class RetrieveUserByIdService{
    async execute(id){
        const user = await prismaClient.jogador.findFirst({
            where:{
                id: id
            }
        });

        return {user};
    }
}

export { RetrieveUserByIdService };
