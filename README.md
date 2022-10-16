# Express-Sequelize


# Getting started

TODO

# Sequelize commands

```bash
npx sequelize model:create --name author --attributes firstName:string,lastName:string,email:string
npx sequelize model:create --name book --attributes title:string,synopsis:string
npx sequelize model:create --name booksAuthors --attributes bookId:uuid,authorId:uuid
```
