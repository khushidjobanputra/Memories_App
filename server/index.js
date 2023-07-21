import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'; 
import userRoutes from './routes/user.js';  
import mongoose from "mongoose"

const app = express();
dotenv.config();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

// const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

// app.listen(PORT,()=>{
//     console.log("port is running")
// })

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
     .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);