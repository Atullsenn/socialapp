import { Model, DataType, Column, Table, CreatedAt  } from "sequelize-typescript";


@Table({
    tableName: "users"
})

export default class user extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field:"id"
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
        type: DataType.DATE,
        field: "last_login"
    })
    last_login?: Date

}