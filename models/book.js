"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.book.belongsToMany(models.author, {
                through: "booksAuthors"
            });
            models.book.hasMany(models.review);
        }
    }
    book.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "'title' cannot by empty."
                    },
                    notNull: {
                        msg: "'title' is required."
                    }
                }
            },
            synopsis: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "'synopsis' cannot by empty."
                    },
                    notNull: {
                        msg: "'synopsis' is required."
                    }
                }
            }
        },
        {
            sequelize,
            modelName: "book"
        }
    );
    return book;
};
