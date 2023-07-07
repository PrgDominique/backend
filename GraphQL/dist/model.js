import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: String,
});
const User = mongoose.model('kitten', userSchema);
export default User;
