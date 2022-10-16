"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("booksAuthors", {
            id: {
                allowNull: false,
                defaultValue: Sequelize.literal("gen_random_uuid()"),
                primaryKey: true,
                type: Sequelize.UUID
            },
            bookId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "books",
                    key: "id"
                },
                onDelete: "CASCADE"
            },
            authorId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "authors",
                    key: "id"
                },
                onDelete: "CASCADE"
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
        await queryInterface.dropTable("booksAuthors");
    }
};
