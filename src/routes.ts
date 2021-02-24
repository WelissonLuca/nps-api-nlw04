import { Router } from 'express';
import { UserController } from './controllers/UserController';
const router = Router();
const userController = new UserController();
const surveyController = new surveyController();

router.post("/users", userController.create)
router.post("/surveys", surveyController.create);

export { router };