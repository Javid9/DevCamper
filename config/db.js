const mongoose = require('mongoose');

const connectDb = async () =>{
    const coon = await  mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`MongoDb Connected: ${coon.connection.host}`.cyan.underline.bold)
}

module.exports = connectDb;
