import mongoose from "mongoose";

const DBconnection = async () => {
    const mongoURI = 'mongodb+srv://sandipan:mukherjee@fileshare.sdswesz.mongodb.net/';
    try {
        await mongoose.connect(mongoURI, {useNewUrlParser: true});
        console.log('Database connected successfully');
    }catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}


export default  DBconnection;