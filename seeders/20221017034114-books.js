"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const books = [
            {
                id: "576db095-3737-4aef-93aa-7963f7e97f20",
                title: "Iron Man",
                synopsis: "Millionaire, playboy, philanthropist",
                createdAt: "2022-10-17T03:10:45.184Z",
                updatedAt: "2022-10-17T03:10:45.184Z"
            },
            {
                id: "7bc0b5f3-a2f9-400c-85d5-c7bebad6376f",
                title: "Avengers",
                synopsis: "Earth's mightiest heroes",
                createdAt: "2022-10-17T03:12:45.580Z",
                updatedAt: "2022-10-17T03:12:45.580Z"
            },
            {
                id: "01af9e0f-57b9-441d-aeb6-47ae3f5cce9e",
                title: "Captain America: The First Avenger",
                synopsis: "Not A Perfect Soldier, But A Good Man",
                createdAt: "2022-10-17T03:15:14.304Z",
                updatedAt: "2022-10-17T03:15:14.304Z"
            },
            {
                id: "3c6a2dd7-c9de-4379-8308-bd6ae65ea1d0",
                title: "Avengers: End Game",
                synopsis: "Avengersssss..... Assemble! AHHHHHHH!",
                createdAt: "2022-10-17T03:17:40.550Z",
                updatedAt: "2022-10-17T03:17:40.550Z"
            }
        ];

        return await queryInterface.bulkInsert("books", books);
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete("books", null, {});
    }
};
