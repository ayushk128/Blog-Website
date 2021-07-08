import mongoose from 'mongoose';

const Connection = async () => {

    // i have used %40 in place of @ in password

    try {
        const URL = 'mongodb://user:ayush%40123@blogweb-shard-00-00.rj4tw.mongodb.net:27017,blogweb-shard-00-01.rj4tw.mongodb.net:27017,blogweb-shard-00-02.rj4tw.mongodb.net:27017/BLOGWEBSITE?ssl=true&replicaSet=atlas-s5uc0h-shard-0&authSource=admin&retryWrites=true&w=majority'
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        console.log('Database connected successfully')
    }
    catch (error) {
        console.log('Error while connecting MongoDb ', error);
    }
}

export default Connection;
