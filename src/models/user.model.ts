import { UUID } from "crypto";
import { Model, DataType, Column, Table} from "sequelize-typescript";


@Table({
    tableName: "users"
})

export class user extends Model{
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    })
    id?: UUID;

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
    password?: any;

    @Column({
        type: DataType.BIGINT,
        field: 'mobile'
    })
    mobile?: bigint;

    @Column({
        type: DataType.STRING(200),
        field: 'address'
    })
    address?: String;

    @Column({
        type: DataType.BLOB,
        field: 'profile'
    })
    profile?: Blob;

    @Column({
        type: DataType.DATE,
        field: "last_login"
    })
    last_login?: Date

}
