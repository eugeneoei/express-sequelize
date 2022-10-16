"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class booksAuthors extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    booksAuthors.init(
        {
            bookId: DataTypes.UUID,
            authorId: DataTypes.UUID
        },
        {
            sequelize,
            modelName: "booksAuthors"
        }
    );
    return booksAuthors;
};
