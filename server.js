import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import  router  from './Routes/router.js';


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/api/v1/test', (req, res) => {
    //console.log(req);
    //res.json({ message: 'Data Recieved', data: req.body });
    const {name} = req.body;
    res.json({message:`hello ${name}`});
});

app.use('/api/v1/jobs', router);

app.use('*', (req, res) => {
    res.status(404).json({ message: 'Oops Not Found!!!' });
})

const port = process.env.PORT || 5100;

try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`Server is running on PORT ${port}...`);
    });
}
catch (error) {
    console.log(error);
    process.exit(1);
}
