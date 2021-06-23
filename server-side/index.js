import express from'express';
import mongoose from  'mongoose';
import cors from 'cors';

import userRoutes from './routes/users.js';

const app = express();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/user', userRoutes);

const CONNECTION_URL = 'mongodb+srv://xianwew:wxwwxw123@cluster0.mx3za.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${ PORT }`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
