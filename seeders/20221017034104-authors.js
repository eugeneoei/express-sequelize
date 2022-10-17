"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const authors = [
            {
                id: "7caba341-7402-4084-a14d-875c862704d7",
                firstName: "Peter",
                lastName: "Parker",
                email: "peter.parker@email.com",
                createdAt: "2022-10-17T03:07:12.453Z",
                updatedAt: "2022-10-17T03:07:12.453Z"
            },
            {
                id: "84091467-398d-41ee-bb5c-7799f6a0cbae",
                firstName: "Tony",
                lastName: "Stark",
                email: "tony.stark@email.com",
                createdAt: "2022-10-17T03:07:17.364Z",
                updatedAt: "2022-10-17T03:07:17.364Z"
            },
            {
                id: "75d3b7ea-db28-4697-8f46-f82880bfa86a",
                firstName: "Bruce",
                lastName: "Banner",
                email: "bruce.banner@email.com",
                createdAt: "2022-10-17T03:07:50.521Z",
                updatedAt: "2022-10-17T03:07:50.521Z"
            },
            {
                id: "95dedb08-131c-4264-9d83-55f94ba141f2",
                firstName: "Steve",
                lastName: "Rogers",
                email: "steve.rogers@email.com",
                createdAt: "2022-10-17T03:08:34.377Z",
                updatedAt: "2022-10-17T03:08:34.377Z"
            },
            {
                id: "281fd5f0-4392-4bce-a70f-36c4a9306370",
                firstName: "Bucky",
                lastName: "Barnes",
                email: "bucky.barnes@email.com",
                createdAt: "2022-10-17T03:08:51.145Z",
                updatedAt: "2022-10-17T03:08:51.145Z"
            }
        ];

        return await queryInterface.bulkInsert("authors", authors);
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete("authors", null, {});
    }
};
