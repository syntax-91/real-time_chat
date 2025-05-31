import mongoose from 'mongoose'
import { msgSchema } from '../schema/msgSchema.js'

export const msgModel = mongoose.model('rooms', msgSchema)