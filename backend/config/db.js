import mongoose from 'mongoose'

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology : true,
            useNewUrlParser:true,
            useCreateIndex:true
            })
            console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.underline.bold)
            }
        catch(error){
            console.log(`Error: ${err.message}`.red.bold)
            process.exit(1)
          }
    }

    export default connectDB


    