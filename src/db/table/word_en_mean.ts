import { Model, Sequelize as sequelize, DataTypes } from 'Sequelize'

class WordENMean extends Model {}

export default function define (db: sequelize) {
  WordENMean.init({
    type: {
      type: DataTypes.TEXT()
    },
    mean: {
      type: DataTypes.TEXT()
    },
    flag: {
      type: DataTypes.INTEGER(),
      defaultValue: 0
    },
    theme: {
      type: DataTypes.TEXT()
    }
  }, {
    sequelize: db,
    timestamps: false,
    underscored: false,
    freezeTableName: true,
    modelName: 'kkutu_en_mean'
  })

  return WordENMean
}

export { WordENMean }
