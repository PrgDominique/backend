import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: String,
});
const userNameSchema = new mongoose.Schema({
    name: String,
    age: Number,
});
export const User = mongoose.model('kitten', userSchema);
export const UserName = mongoose.model('username', userNameSchema);
// export { User, UserName }
