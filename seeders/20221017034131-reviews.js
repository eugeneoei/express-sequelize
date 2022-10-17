"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const reviews = [
            {
                id: "846fa373-936c-42cb-bba5-367e01fb3fef",
                bookId: "01af9e0f-57b9-441d-aeb6-47ae3f5cce9e",
                content: "I Could Do This All Day.",
                rating: 4,
                createdAt: "2022-10-17T03:19:46.701Z",
                updatedAt: "2022-10-17T03:19:46.701Z"
            },
            {
                id: "7bda8d92-93e7-45d8-8ca4-b209445b7f18",
                bookId: "3c6a2dd7-c9de-4379-8308-bd6ae65ea1d0",
                content: "What we have all been waiting for!",
                rating: 5,
                createdAt: "2022-10-17T03:20:39.788Z",
                updatedAt: "2022-10-17T03:20:39.788Z"
            },
            {
                id: "5fad7688-9046-4f09-96f7-2481c009a341",
                bookId: "3c6a2dd7-c9de-4379-8308-bd6ae65ea1d0",
                content: "Perfect! Class! Beautiful!",
                rating: 5,
                createdAt: "2022-10-17T03:21:22.765Z",
                updatedAt: "2022-10-17T03:21:22.765Z"
            },
            {
                id: "d4712e56-f630-4254-b785-2d93778276ce",
                bookId: "576db095-3737-4aef-93aa-7963f7e97f20",
                content: "I am Iron Man.",
                rating: 4,
                createdAt: "2022-10-17T03:22:57.680Z",
                updatedAt: "2022-10-17T03:22:57.680Z"
            }
        ];

        return await queryInterface.bulkInsert("reviews", reviews);
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete("reviews", null, {});
    }
};
