import express from 'express';
import { AuthControllers } from './auth.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { UserValidation } from '../user/user.validation';

const router = express.Router();

router.post('/register',validateRequest(UserValidation.userValidationShcema), AuthControllers.registerUser)


export const AuthRoutes = router;

