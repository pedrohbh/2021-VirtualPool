import { google } from "googleapis";
import prismaClient from "../prisma/index.js";
import pkg from 'jsonwebtoken';
const {sign} = pkg;

class AuthenticateUserService {
    async execute(code) {
        const oauth2client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            process.env.GOOGLE_REDIRECT_URI
        );

        const { tokens } = await oauth2client.getToken(code);
        oauth2client.setCredentials(tokens);

        const oauth2 = google.oauth2({
            auth: oauth2client,
            version: 'v2'
        });

        const userData = await oauth2.userinfo.get({});

        //não sei como modificar daqui pra cima

        const {id, email, picture} = userData.data;

        let jogador = await prismaClient.jogador.findFirst({
            where:{
                id: id
            }
        });

        if (!jogador){
           jogador =  await prismaClient.jogador.create({
                data:{
                    id: id,
                    email: email,
                    vitorias: 0,
                    derrotas: 0,
                    nome: email.split("@")[0],
                    picture: picture

                }
            });
        }

        const token = sign({
            jogador: {
                nome: jogador.nome,
                id: jogador.id,
                email: jogador.email,
                vitorias: jogador.vitorias,
                derrotas: jogador.derrotas,
                picture: jogador.picture
            }  
        },
        process.env.JWT_SECRET,
        {
            subject: jogador.id,
            expiresIn: "1d"
        }
        );

        //return userData.data;
        return {token, jogador};
    }
}

export { AuthenticateUserService }