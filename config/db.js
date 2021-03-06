const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.bold);
    } catch(error) {
        console.log(`Error message ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;