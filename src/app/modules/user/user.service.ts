<<<<<<< HEAD
import { TUser } from './user.interface'
import { User } from './user.model'

=======
// import { TRegister } from '../../types/global';
import { TUser } from './user.interface'
import { User } from './user.model'
// const RegisterUserIntoDB = async ({ name, email, password }: TRegister) => {
//     const result = await User.create({
//       email,
//       password,
//       name,
//     });
//     return result;
//   };
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
const getUsersFromDB = async () => {
  const result = await User.find()
  return result
}
const getSingleUserFromDB = async (id: string) => {
  const result = await User.findById(id)
  return result
}
const updateUserIntoDB = async (id: string, data: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  })
<<<<<<< HEAD

=======
  
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
  return result
}

export const userServices = {
  getUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
<<<<<<< HEAD
}
=======
//   RegisterUserIntoDB
}
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
