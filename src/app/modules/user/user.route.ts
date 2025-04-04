import express from 'express'
import { userControllers } from './user.controller'
import { validateRequest } from '../../middlewares/validateRequest'
import { UserValidation } from './user.validation'

const router = express.Router()

router.get('/', userControllers.getUsers)
router.get('/:userId', userControllers.getSingleUser)
router.patch(
  '/:userId',
  validateRequest(UserValidation.updateUserValidationShcema),
  userControllers.updateUser,
)

export const UserRoutes = router
