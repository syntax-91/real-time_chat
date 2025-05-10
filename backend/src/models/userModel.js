import mongoose from 'mongoose'
import { UserSchema } from './schema/UserSchema.js'

export const UserModel = mongoose.model("User",UserSchema);