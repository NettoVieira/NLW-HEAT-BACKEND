import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthentucateUserController';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle)

export { router }