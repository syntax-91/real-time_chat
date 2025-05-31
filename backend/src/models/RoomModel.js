import mongoose from 'mongoose'
import { roomSchema } from '../schema/roomSchema.js'

export const RoomModel = mongoose.model('rooms', roomSchema)