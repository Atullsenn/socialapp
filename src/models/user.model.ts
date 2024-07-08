import { UUID } from "crypto";
import { Model, DataType, Column, Table} from "sequelize-typescript";


@Table({
    tableName: "users"
})

export class user extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    })
    id?: number;

    @Column({
        type: DataType.STRING(50),
        field: 'first_name'
    })
    first_name?: String;

    @Column({
        type: DataType.STRING(50),
        field: 'last_name'
    })
    last_name?: String;

    @Column({
        type: DataType.STRING(100),
        field: 'email'
    }) 
    email?: String;

    @Column({
        type: DataType.STRING(),
        field: 'password',
       
    })
    password?: String;

    @Column({
        type: DataType.BIGINT,
        field: 'mobile'
    })
    mobile?: bigint;


    @Column({
        type: DataType.STRING,
        field: 'profile'
    })
    profile?: String;

    @Column({
        type: DataType.DATE,
        field: "last_login"
    })
    last_login?: Date

}




@Table({
    tableName: 'user_posts'
})

export class user_post extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'post_id'
    })
    post_id?: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        unique: true,
        field: 'owner_id'
    })
    owner_id?: number;


    @Column({
        type: DataType.STRING(300),
        field: 'post_description'
    })
    post_description?: String;


    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'post_image'
    })
    post_image?: String;


}



@Table({
    tableName: 'user_address'
})


export class user_address extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        field: 'id'
    })
    id?: number;


    @Column({
        type: DataType.INTEGER,
        unique: true,
        allowNull: false,
        field: 'user_id'
    })
    user_id?: number;


    @Column({
        type: DataType.STRING(50),
        allowNull: false,
        field: 'town'
    })
    town?: String;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
        field: 'city'
    })
    city?: String;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
        field: 'state'
    })
    state?: String;

    @Column({
        type: DataType.STRING(50),
        allowNull: false,
        field: 'country'
    })
    country?: String;
}


