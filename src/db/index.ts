import {Sequelize} from 'sequelize-typescript';
import {config, dialect} from '../config/db.config';
import {user} from '../models/user.model';


class Database{
    public sequelize:Sequelize | undefined;

    constructor(){
        this.connectToDatabase()
    }

    private async connectToDatabase(){
        this.sequelize = new Sequelize({
            database:config.DB,
            username:config.USER,
            password:'',
            host:config.HOST,
            dialect: dialect,
            pool:{
                max:config.pool.max,
                min:config.pool.min,
                acquire:config.pool.aquire,
                idle: config.pool.idle
            },
            models:[user]
        })

        await this.sequelize.authenticate().then(()=>{
            console.log('Connection has been stablish successfully')
        }).catch((err)=>{
            console.log('Unable to connect database' ,err)
        })
    }
}

export default Database;