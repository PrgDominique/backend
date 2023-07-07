import 'dotenv/config.js';
import mongoose from 'mongoose';
main().catch((err) => console.log(err));
async function main() {
    // await mongoose.connect(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    const kittySchema = new mongoose.Schema({
        name: String,
    });
    const Kitten = mongoose.model('Kittens', kittySchema);
    const silence = new Kitten({ name: 'Silence' });
    await silence.save();
    console.log(silence.name);
    const kittens = await Kitten.find();
    console.log(kittens);
    await Kitten.find({ name: /^Silence/ });
}
