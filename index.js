//import express
import express from "express";
//import mongoose
import mongoose from "mongoose";
// import routes
import route from "./routes/index.js";
//import cors
import cors from "cors";
// construct express function
const app = express();

// connect ke database mongoDB
mongoose.connect("mongodb+srv://admin:admin123@cluster0.twwsb.mongodb.net/restful_db?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

// middleware 
app.use(cors());
app.use(express.json());
app.use('/products', route);

// listening to port
app.listen('3000', () => console.log('Server Running at port: 3000'));
