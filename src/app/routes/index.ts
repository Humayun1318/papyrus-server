import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { AuthRoutes } from '../modules/auth/auth.routes'
import { AdminRouter } from '../modules/admin/admin.routes'

const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/admin',
    route: AdminRouter,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
