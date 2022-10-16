"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("authors", {
            id: {
                allowNull: false,
                defaultValue: Sequelize.literal("gen_random_uuid()"),
                primaryKey: true,
                type: Sequelize.UUID
            },
            firstName: {
                allowNull: false,
                type: Sequelize.STRING
            },
            lastName: {
                allowNull: false,
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING
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
        await queryInterface.dropTable("authors");
    }
};
