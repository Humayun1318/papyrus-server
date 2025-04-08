import express from 'express'
import { userControllers } from './user.controller'
import { validateRequest } from '../../middlewares/validateRequest'
import { UserValidation } from './user.validation'
<<<<<<< HEAD
import auth from '../../middlewares/auth'

const router = express.Router()

router.get('/', auth('admin'), userControllers.getUsers)
router.get('/:userId', auth('user', 'admin'), userControllers.getSingleUser)
router.patch(
  '/:userId',
  auth('user'),
=======

const router = express.Router()

router.get('/', userControllers.getUsers)
router.get('/:userId', userControllers.getSingleUser)
router.patch(
  '/:userId',
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
  validateRequest(UserValidation.updateUserValidationShcema),
  userControllers.updateUser,
)

<<<<<<< HEAD
export const UserRoutes = router
=======
export const UserRoutes = router
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
