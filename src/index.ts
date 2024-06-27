import express,{Application} from 'express';
import cors,{CorsOptions} from 'cors';
import Database from './db';
import dotenv from 'dotenv';
dotenv.config();

export default class server{
    constructor(app: Application){
        this.config(app)
        this.syncDatabase();
    }


    private config(app: Application): void{
        const corsOptions:CorsOptions = {
            origin: "http://localhost:3000"
        }

        app.use(cors(corsOptions));
        app.use(express.json());
        app.use(express.urlencoded({extended: true}))
    }


    private syncDatabase():void{
        const db = new Database();
        db.sequelize?.sync();
    }

}