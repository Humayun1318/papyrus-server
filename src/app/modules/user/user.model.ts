import { model, Schema } from 'mongoose'
import { TUser, UserModel } from './user.interface'
<<<<<<< HEAD
import { userRole } from './user.constant'
=======
import { USER_ROLE } from './user.constant'
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
import bcrypt from 'bcrypt'
import config from '../../config'

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: false,
    },

    role: {
      type: String,
<<<<<<< HEAD
      enum: userRole,
      default: 'user',
      required: true,
    },
=======
      enum: USER_ROLE,
      default: 'user',
      required: true,
    },
    status: {
        type: String,
        enum: ['active', 'blocked'],
        default: 'active',
        required: true,
      },
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
    isDeactivate: {
      type: Boolean,
      default: false,
      required: true,
    },
<<<<<<< HEAD
    address: {
      type: String,
      required: false,
      default: '',
    },
=======
    phone: { type: String, default: "N/A" },
    address: { type: String, default: "N/A" },
    city: { type: String, default: "N/A" },
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
  },
  {
    timestamps: true,
  },
)

userSchema.pre('save', function (next) {
  if (this.isModified('name') || this.isNew) {
    this.name = this.name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }
  next()
})

userSchema.pre('save', async function (next) {
  const user = this // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  )
  next()
})

userSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})

<<<<<<< HEAD
userSchema.statics.isUserExistsByCustomId = async function (id: string) {
  return await User.findOne({ _id: id }).select('+password')
=======

userSchema.statics.isUserExistsByCustomEmail = async function (email: string) {
    return await User.findOne({ email });
  };

userSchema.statics.isUserExistsByCustomId = async function (id: string) {
  return await User.findOne({ _id:id }).select('+password')
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
}

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword)
}
<<<<<<< HEAD
export const User = model<TUser, UserModel>('User', userSchema)
=======
export const User = model<TUser, UserModel>('User', userSchema)
>>>>>>> 3b257219d15d005c906c997e40cd8cd2d546fbb4
