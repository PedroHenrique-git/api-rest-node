import { Router } from 'express';
import userController from '../Controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;