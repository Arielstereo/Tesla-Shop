import {connect} from 'mongoose'

async function dbConnect() {
  try {
    await connect(process.env.MONGODB_URI)
    console.log('Connect to MongoDB database!')
  } catch (error) {
    throw new Error('Connection failed!')
  }
}

export default dbConnect