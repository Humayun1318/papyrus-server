import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import status from 'http-status'
import { AuthServices } from './auth.services'

const registerUser = catchAsync(async (req, res) => {
  const result = await AuthServices.userRegisteredIntoDB(req.body)

  const filteredResponse = {
    _id: result?._id,
    name: result?.name,
    email: result?.email,
  }

  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: status.CREATED,
    data: filteredResponse,
  })
})

export const AuthControllers = {
  registerUser,
}
