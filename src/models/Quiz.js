const dayjs = require("dayjs");
require ('dayjs');
require('dayjs/locale/fr');

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize-client");

class Quiz extends Model {
  get formatedDate(){
    return dayjs(this.created_at).locale('fr').format('dddd D MMMM YYYY');
  }
}

Quiz.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  tableName: "quiz"
});


module.exports = Quiz;
