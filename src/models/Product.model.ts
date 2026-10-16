import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

@Table({
    tableName: 'products'
})

export class Product extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare name: string | undefined

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false
    })
    declare price: number | undefined

    @Default(0)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0
    })
    declare stock: number | undefined
}

export default Product
