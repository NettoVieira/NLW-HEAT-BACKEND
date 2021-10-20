import {Response, Request} from 'express'
import { AuthenticationUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const service = new AuthenticationUserService();

    const result = await service.execute(code)

    return response.json(result)
  }
}
export { AuthenticateUserController };