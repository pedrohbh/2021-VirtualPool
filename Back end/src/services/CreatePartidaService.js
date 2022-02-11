import prismaClient from "../prisma/index.js";
import { io } from "../app.js";

class CreatePartidaService {
    async execute(duracao, idOP, nomeOP, id, nome) {

        const idpartida = Math.floor(Math.random() * 100000001).toString();

        var dt = new Date(Date.now() - 1000 * (60 * parseInt(duracao)));
        dt.setHours(dt.getHours() - 3);

        if (idpartida < 100000000 / 2) {
            const partida = await prismaClient.partida.create({
                data: {
                    id: idpartida,
                    data: dt,
                    duracao,
                    idPerdedor: idOP,
                    idVencedor: id,
                    nomeVencedor: nome,
                    nomePerdedor: nomeOP
                }
            });

            await prismaClient.jogador.update({
                where:{
                    id: id
                },
                data:{
                    vitorias: {
                        increment: 1
                    }
                }
            });

            await prismaClient.jogador.update({
                where:{
                    id: idOP
                },
                data:{
                    derrotas: {
                        increment: 1
                    }
                }
            });
            return partida;
        } else {
            const partida = await prismaClient.partida.create({
                data: {
                    id: idpartida,
                    data: dt,
                    duracao,
                    idPerdedor: id,
                    idVencedor: idOP,
                    nomeVencedor: nomeOP,
                    nomePerdedor: nome
                }
            });

            await prismaClient.jogador.update({
                where:{
                    id: idOP
                },
                data:{
                    vitorias: {
                        increment: 1
                    }
                }
            });

            await prismaClient.jogador.update({
                where:{
                    id: id
                },
                data:{
                    derrotas: {
                        increment: 1
                    }
                }
            });
            
            return partida;
        }
    }
}

export { CreatePartidaService };
