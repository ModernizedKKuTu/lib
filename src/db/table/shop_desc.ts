import { Model, Sequelize as sequelize, DataTypes } from 'Sequelize'

class ShopDesc extends Model {}

export default function define (db: sequelize) {
  ShopDesc.init({
    name_ko_KR: {
      type: DataTypes.TEXT()
    },
    desc_ko_KR: {
      type: DataTypes.TEXT()
    },
    name_en_US: {
      type: DataTypes.TEXT()
    },
    desc_en_US: {
      type: DataTypes.TEXT()
    }
  }, {
    sequelize: db,
    timestamps: false,
    underscored: false,
    freezeTableName: true,
    modelName: 'kkutu_shop_desc'
  })

  return ShopDesc
}

export { ShopDesc }
