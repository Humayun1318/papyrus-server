import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.join((process.cwd(), '.env')),
})

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASSWORD,
  jwt_access_token: process.env.JWT_ACCESS_SECRET,
  server_base_url: process.env.SERVER_BASE_URL,
  //added by mirza nahid
  //jwt and refresh secret and expiry added here 
  jwt_access_secret:process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret:process.env.JWT_REFRESH_SECRET,
  jwt_access_secret_expires_in:process.env.JWT_ACCESS_SECRET_EXPIRES_IN,
  jwt_refresh_secret_exires_in:process.env.JWT_REFRESH_SECRET_EXPIRES_IN,
}

