import { google } from "googleapis";

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

        return userData.data;
    }
}

export { AuthenticateUserService }