const mongoose = require('mongoose');
require('dotenv').config();
async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connect Successfully!!!');
    } catch (error) {
        console.log('Connect Fail!!!', error);
    }
}

module.exports = { connect };
