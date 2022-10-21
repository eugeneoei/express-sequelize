# Express-Sequelize

A basic and simple example on `sequelize` using `express` and `postgresql`.

# Relationships

- Book **M:M** Author
- Book **1:M** Reviews

# Routes

The following are the endpoints used in this example:

- `POST /authors`
    - Example payload
        ```json
        {
            "firstName": "Bucky",
            "lastName": "Barnes",
            "email": "bucky.barnes@email.com"
        }
        ```
- `GET /authors`
- `POST /books`
    - Example payload
    - `authors` is an array of author ids
        ```json
        {
            "title": "Avengers: End Game",
            "synopsis": "Avengersssss..... Assemble! AHHHHHHH!",
            "authors": [
                "7caba341-7402-4084-a14d-875c862704d7",
                "84091467-398d-41ee-bb5c-7799f6a0cbae",
                "75d3b7ea-db28-4697-8f46-f82880bfa86a",
                "95dedb08-131c-4264-9d83-55f94ba141f2",
                "281fd5f0-4392-4bce-a70f-36c4a9306370"
            ]
        }
        ```
- `GET /books`
- `GET /books/:bookId`
- `DELETE /books/:bookId`
- `POST /books/:bookId/reviews`
    - Example payload
    - `rating` must be an integer and between 1 to 5
        ```json
        {
            "rating": 4,
            "content": "I am Iron Man."
        }
        ```

# Getting started

- Create `.env` file using contents in `env.example` update respective values
- Run `npm install`
- Run `npx sequelize db:migrate` to create tables in database
- Run `npx sequelize db:seed:all` to seed some data into tables
- Run `npm run dev`

# Sequelize commands

### Creating models and tables

Syntax:

```bash
npx sequelize model:create --name <model-name> --attributes attributeOneName:attributeOneType,attributeTwoName:attributeTwoType
```

Examples:

```bash
# create author
npx sequelize model:create --name author --attributes firstName:string,lastName:string,email:string

# create book
npx sequelize model:create --name book --attributes title:string,synopsis:string

# create join table for books and authors to establish M:M relationship
npx sequelize model:create --name booksAuthors --attributes bookId:uuid,authorId:uuid

# create book reviews 1:M relationship
npx sequelize model:create --name review --attributes bookId:uuid,content:string,rating:integer
```

### Creating seeder files

Syntax:

```bash
npx sequelize-cli seed:generate --name <name-of-seed-file>
```

Examples:
```bash
npx sequelize-cli seed:generate --name reviews
```
