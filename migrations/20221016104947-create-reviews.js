"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("reviews", {
            id: {
                allowNull: false,
                defaultValue: Sequelize.literal("gen_random_uuid()"),
                primaryKey: true,
                type: Sequelize.UUID
            },
            bookId: {
                allowNull: false,
                type: Sequelize.UUID,
                references: {
                    model: "books",
                    key: "id"
                },
                onDelete: "CASCADE"
            },
            content: {
                allowNull: false,
                type: Sequelize.STRING
            },
            rating: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("reviews");
    }
};
