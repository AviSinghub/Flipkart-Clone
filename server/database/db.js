import mongoose from "mongoose";

export const Connection = async(username,password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.k924iw0.mongodb.net/FLIPKARTECOMM?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
        
    } catch (error) {
        console.log('Error while connecting', error.message)
    }
}
export default Connection;