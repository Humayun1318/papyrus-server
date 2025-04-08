/* eslint-disable no-unused-vars */
<<<<<<< HEAD
import { Model } from 'mongoose'
export type TUser = {
=======
import { Model, Types } from 'mongoose'
export type TUser = {
    _id?: Types.ObjectId
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
  id: string
  name: string
  email: string
  password: string
<<<<<<< HEAD
  role: 'admin' | 'user'
  isDeactivate: boolean
  address?: ''
=======
  status: 'active' | 'blocked'
  role: 'admin' | 'user'
  isDeactivate: boolean
  phone?: string;
  address?: string;
  city?: string;
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
}

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByCustomId(id: string): Promise<TUser>
<<<<<<< HEAD
=======
  isUserExistsByCustomEmail(email: string): Promise<TUser>;
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>
<<<<<<< HEAD
}
=======
}
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
