/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'
export type TUser = {
  id: string
  name: string
  email: string
  password: string
  role: 'admin' | 'user'
  isDeactivate: boolean
  address?: ''
}

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByCustomId(id: string): Promise<TUser>
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>
}
