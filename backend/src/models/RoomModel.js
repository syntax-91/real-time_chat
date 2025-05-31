import mongoose from 'mongoose'
import { roomSchema } from '../schema/roomSchema.js'

console.log('models: ', mongoose.models)

export const RoomModel = mongoose.models.rooms || mongoose.model('rooms', roomSchema)