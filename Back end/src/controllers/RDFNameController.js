import { RDFService } from '../services/RDFService.js';
class RDFNameController {

    async handle(request, response) {
        const { nome } = request.params;
        const service = new RDFService();
        try {
            const result = await service.Get(nome);
            response.set('Content-Type', 'text/xml');
            return response.json(result);;
        } catch (error) {
            return response.json(error.message);
        }
    }
  }
  
  export {RDFNameController}