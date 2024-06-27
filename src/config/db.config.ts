import dotenv from 'dotenv';
dotenv.config();

export const config = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD:process.env.PASSWORD,
    DB: process.env.DATABASE,
    pool:{
        max:5,
        min:0,
        aquire: 30000,
        idle: 10000

    }

}


export const dialect = 'mysql';