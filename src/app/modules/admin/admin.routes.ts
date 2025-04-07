import express from 'express'
import { AdminControllers } from './admin.controller'

const router = express.Router()

router.patch('/user/:id/deactivate', AdminControllers.deactivateUserByAdmin)

export const AdminRouter = router
