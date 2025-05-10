import mongoose from 'mongoose'

export const UserSchema = mongoose.Schema({
	username: String,
	password: String
})