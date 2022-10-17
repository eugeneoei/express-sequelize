"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class reviews extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.review.belongsTo(models.book);
        }
    }
    reviews.init(
        {
            bookId: DataTypes.UUID,
            content: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "'content' cannot by empty."
                    },
                    notNull: {
                        msg: "'content' is required."
                    }
                }
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isInt: {
                        msg: "Rating must be an integer."
                    },
                    isIn: {
                        args: [[1, 2, 3, 4, 5]],
                        msg: "Rating must be either 1, 2, 3, 4, or 5."
                    },
                    notNull: {
                        msg: "'rating' is required."
                    }
                }
            }
        },
        {
            sequelize,
            modelName: "review"
        }
    );
    return reviews;
};
