import express,{Application} from 'express';
import Server from './src/index';


const app:Application = express();
const server:Server = new Server(app);
const PORT:number = process.env.PORT ? parseInt(process.env.PORT,10) : 4001;


process.on('uncaugthException', (err)=>{
    console.log('There was an uncaugth error', err);
    process.exit(1);
});


app.listen(PORT, 'localhost', ()=>{
    console.log(`Server running on port ${PORT}`)
}).on('error', (err:any)=>{
    if(err.code == 'EADDRINUSE'){
        console.log("error: Address already in use")
    }

    else{ 
        console.log(err)
    }
})