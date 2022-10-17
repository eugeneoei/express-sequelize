# Express-Sequelize


# Getting started

TODO

# Sequelize commands

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
