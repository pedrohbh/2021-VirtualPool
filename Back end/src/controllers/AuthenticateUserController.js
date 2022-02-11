import { AuthenticateUserService } from "../services/AuthenticateUserService.js";

class AuthenticateUserController {
    async handle(request, response) {
        const { code } = request.body;
        
        const service = new AuthenticateUserService();
        try {
            const result = await service.execute( code );
            return response.json(result);
        } catch (error) {
            return response.json(error.message);
        }
    }
}

export { AuthenticateUserController }