"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const booksAuthors = [
            {
                id: "a7190500-5119-486f-8fac-44170e5b6d4a",
                bookId: "576db095-3737-4aef-93aa-7963f7e97f20",
                authorId: "84091467-398d-41ee-bb5c-7799f6a0cbae",
                createdAt: "2022-10-17T03:10:45.248Z",
                updatedAt: "2022-10-17T03:10:45.248Z"
            },
            {
                id: "0235a53f-8ac4-4e07-b7f0-ae24fab809ec",
                bookId: "7bc0b5f3-a2f9-400c-85d5-c7bebad6376f",
                authorId: "84091467-398d-41ee-bb5c-7799f6a0cbae",
                createdAt: "2022-10-17T03:12:45.637Z",
                updatedAt: "2022-10-17T03:12:45.637Z"
            },
            {
                id: "01c5b689-25a4-4eb2-a8db-03eeeefc1781",
                bookId: "7bc0b5f3-a2f9-400c-85d5-c7bebad6376f",
                authorId: "75d3b7ea-db28-4697-8f46-f82880bfa86a",
                createdAt: "2022-10-17T03:12:45.642Z",
                updatedAt: "2022-10-17T03:12:45.642Z"
            },
            {
                id: "a94d4da8-6b13-4ce3-9440-aa5f41b05deb",
                bookId: "7bc0b5f3-a2f9-400c-85d5-c7bebad6376f",
                authorId: "95dedb08-131c-4264-9d83-55f94ba141f2",
                createdAt: "2022-10-17T03:12:45.647Z",
                updatedAt: "2022-10-17T03:12:45.647Z"
            },
            {
                id: "5260220c-1b42-4082-9ce6-2b19f0404cf3",
                bookId: "01af9e0f-57b9-441d-aeb6-47ae3f5cce9e",
                authorId: "281fd5f0-4392-4bce-a70f-36c4a9306370",
                createdAt: "2022-10-17T03:15:14.348Z",
                updatedAt: "2022-10-17T03:15:14.348Z"
            },
            {
                id: "f3b37b31-ec38-4d40-a8ef-a441e1ae1dfb",
                bookId: "01af9e0f-57b9-441d-aeb6-47ae3f5cce9e",
                authorId: "95dedb08-131c-4264-9d83-55f94ba141f2",
                createdAt: "2022-10-17T03:15:14.357Z",
                updatedAt: "2022-10-17T03:15:14.357Z"
            },
            {
                id: "744b860a-d085-4384-86b5-f74fd7342a00",
                bookId: "3c6a2dd7-c9de-4379-8308-bd6ae65ea1d0",
                authorId: "7caba341-7402-4084-a14d-875c862704d7",
                createdAt: "2022-10-17T03:17:40.610Z",
                updatedAt: "2022-10-17T03:17:40.610Z"
            },
            {
                id: "3874b27e-fbcd-4d9a-be01-e5891aeb2ca0",
                bookId: "3c6a2dd7-c9de-4379-8308-bd6ae65ea1d0",
                authorId: "84091467-398d-41ee-bb5c-7799f6a0cbae",
                createdAt: "2022-10-17T03:17:40.614Z",
                updatedAt: "2022-10-17T03:17:40.614Z"
            },
            {
                id: "038b0248-5885-4436-923b-4f9088bbb538",
                bookId: "3c6a2dd7-c9de-4379-8308-bd6ae65ea1d0",
                authorId: "95dedb08-131c-4264-9d83-55f94ba141f2",
                createdAt: "2022-10-17T03:17:40.617Z",
                updatedAt: "2022-10-17T03:17:40.617Z"
            },
            {
                id: "82df643b-c0d1-4ed8-93c8-ddfe44b72798",
                bookId: "3c6a2dd7-c9de-4379-8308-bd6ae65ea1d0",
                authorId: "75d3b7ea-db28-4697-8f46-f82880bfa86a",
                createdAt: "2022-10-17T03:17:40.615Z",
                updatedAt: "2022-10-17T03:17:40.615Z"
            },
            {
                id: "e992eb46-6525-4149-863c-f421dadd4f6d",
                bookId: "3c6a2dd7-c9de-4379-8308-bd6ae65ea1d0",
                authorId: "281fd5f0-4392-4bce-a70f-36c4a9306370",
                createdAt: "2022-10-17T03:17:40.617Z",
                updatedAt: "2022-10-17T03:17:40.617Z"
            }
        ];

        return await queryInterface.bulkInsert("booksAuthors", booksAuthors);
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete("booksAuthors", null, {});
    }
};
