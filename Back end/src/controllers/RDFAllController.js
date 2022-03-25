import { RDFService } from '../services/RDFService.js';
import xml from 'xml';

class RDFAllController {

  async handle(request, response) {
      
      const service = new RDFService();
      try {
          const result = await service.GetAll();
          response.set('Content-Type', 'text/xml');
          return response.json(result);
      } catch (error) {
          return response.json(error.message);
      }
  }
}

export {RDFAllController}