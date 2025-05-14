import mongoose from 'mongoose'

export async function connectDB() {
	const URI = process.env.URI
	try {
		await mongoose.connect(URI)
	} catch (err) {
		console.log('ERROR: ', err)
	}
}
