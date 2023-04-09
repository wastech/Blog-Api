// import mongoose from "mongoose";
// export const connectDB = async () => {
//   await mongoose
//     .set("strictQuery", false)
//     .connect(process.env.DATABASE_URL, {})
//     .then(() => {
//       console.log("Successfully connected to the database");
//     })
//     .catch((err) => {
//       console.log("Error connecting to the database");
//       console.log(err);
//       process.exit();
//     });
// };


import mongoose, {ConnectOptions} from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.DATABASE_URL;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  );
}
mongoose.set('strictQuery', true)
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
}as ConnectOptions);

const connectDB = mongoose.connection;

connectDB.on('error', console.error.bind('connection error:'));
connectDB.once('open', function () {
  console.log(('MongoDB database connection established successfully'));
});

export default connectDB;