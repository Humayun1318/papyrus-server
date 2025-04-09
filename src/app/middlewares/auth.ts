import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import AppError from '../errors/AppError'
import { StatusCodes } from 'http-status-codes'
const auth = (...requiredRoles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const extractedToken = req.headers.authorization

      if (!extractedToken) {
        throw new AppError(StatusCodes.UNAUTHORIZED, 'You are not authorized')
      }
      const token = (extractedToken as string).split(' ')[1]
      if (!token) {
        throw new AppError(401, 'You are not Authorized')
      }
      jwt.verify(
        token,
        config.jwt_access_token as string,
        function (err, decoded) {
          if (err) {
            throw new AppError(401, 'Invalid Token')
          }

          const role = (decoded as JwtPayload).role
          if (requiredRoles.length > 0 && !requiredRoles.includes(role)) {
            throw new AppError(401, 'You are not Authorized')
          }

          req.user = decoded as JwtPayload
          next()
        },
      )
    } catch (error) {
      next(error)
    }
  }
}

export default auth
