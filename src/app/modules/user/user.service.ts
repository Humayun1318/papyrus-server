import { TUser } from './user.interface'
import { User } from './user.model'

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
  
  return result
}

export const userServices = {
  getUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
}
