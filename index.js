import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';

import postRouter from './routers/PostRouter.js';

const PORT = 3003;
const URL_DB = 'mongodb+srv://admin:admin@cluster0.thv6k83.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use( express.json() );
app.use( express.static( 'static' ) );
app.use( fileUpload( {} ) );
app.use( '/api', postRouter );


const startApp = async () => {
    try {
        await mongoose.connect( URL_DB );
        app.listen( PORT, () => console.log( `Server started on ${ PORT } port ` ) );
    } catch ( e ) {
        throw e;
    }
};

startApp();