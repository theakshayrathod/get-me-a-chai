import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://localhost:27017/chai`, {
            useNewUrlParser: true,
        })
        console.log(`MOngoDB Connected: {conn.connection.host}`);

    } catch (error) {
        console.error(error.message);
        process.exit(i);

    }

}

export default connectDB;