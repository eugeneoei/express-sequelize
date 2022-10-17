"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class author extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.author.belongsToMany(models.book, {
                through: "booksAuthors"
            });
        }
    }
    author.init(
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "'firstName' cannot by empty."
                    },
                    notNull: {
                        msg: "'firstName' is required."
                    }
                }
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "'firstName' cannot by empty."
                    },
                    notNull: {
                        msg: "'firstName' is required."
                    }
                }
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    isEmail: {
                        args: true,
                        msg: "The email provided is invalid."
                    },
                    notNull: {
                        msg: "'email' is required."
                    }
                }
            }
        },
        {
            sequelize,
            modelName: "author"
        }
    );
    return author;
};
