const e = require('express');
const mongoose = require('mongoose');
require('dotenv').config({});

exports.ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`the db is connected with ${mongoose.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        mongoose.disconnect();
        process.exit(1);
    }
}