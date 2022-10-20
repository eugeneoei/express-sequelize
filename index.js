require("dotenv").config({
    path:
        process.env.ENVIRONMENT === "production"
            ? "./.env.production"
            : "./.env.development"
});
const express = require("express");
const db = require("./models");
const { Op, fn, col } = require("sequelize");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "success"
    });
});

app.get("/authors", async (req, res) => {
    try {
        // * get all authors
        // const authors = await db.author.findAll();
        // res.json(authors);

        // * OR operator
        // const authors = await db.author.findAll({
        //     where: {
        //         [Op.or]: [{ firstName: "Peter" }, { firstName: "Tony" }]
        //         // firstName: ["peter", "Tony"] // equivalent to above
        //     }
        // });
        // res.json(authors);

        // * AND operator
        // const authors = await db.author.findAll({
        //     where: {
        //         [Op.and]: [{ firstName: "Tony" }, { lastName: "Stark" }]
        //     }
        // });
        // res.json(authors);

        // * ordering
        // const authors = await db.author.findAll({
        //     order: [
        //         // ["firstName"] // by default in asecending order
        //         ["firstName", "DESC"]
        //     ]
        // });
        // res.json(authors);

        // * pagination
        const { pageSize, page } = req.query;
        const hasPagination = pageSize && page;
        const { count, rows } = await db.author.findAndCountAll({
            ...(hasPagination && { limit: pageSize }),
            ...(hasPagination && { offset: (page - 1) * pageSize })
        });
        res.json({
            count,
            authors: rows,
            hasNextPage: hasPagination ? page * pageSize < count : false
        });
    } catch (error) {
        res.json(error);
    }
});

app.post("/authors", async (req, res) => {
    try {
        const body = req.body;
        const author = await db.author.create(body);
        res.json(author);
    } catch (error) {
        const errorData = error.errors[0];
        if (errorData.validatorKey === "not_unique") {
            res.json({
                error: "Email has already been taken."
            });
        } else {
            res.json({
                error: errorData.message
            });
        }
    }
});

app.get("/books", async (req, res) => {
    try {
        const books = await db.book.findAll({
            attributes: [
                "id",
                "title",
                "synopsis",
                "createdAt",
                "updatedAt",
                [fn("COUNT", col("reviews.id")), "reviewsCount"]
            ],
            group: ["book.id", "authors.id", "reviews.id"],
            include: [
                {
                    model: db.author,
                    attributes: ["id", "firstName", "lastName"],
                    through: { attributes: [] } // to ignore rows from join table
                },
                {
                    model: db.review,
                    attributes: ["id", "content", "rating"],
                    as: "reviews"
                }
            ]
        });
        res.json(books);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

app.post("/books", async (req, res) => {
    try {
        const { title, synopsis, authors } = req.body;
        const [book] = await db.book.findOrCreate({
            where: {
                title,
                synopsis
            }
        });
        const promises = authors.map(
            async author => await book.addAuthor(author)
        );
        await Promise.all(promises);
        res.json(book);
    } catch (error) {
        console.log(error);
        res.json({
            error: error.errors[0].message
        });
    }
});

app.get("/books/:bookId", async (req, res) => {
    try {
        const book = await db.book.findByPk(req.params.bookId, {
            include: [
                {
                    model: db.author,
                    attributes: ["id", "firstName", "lastName"],
                    through: { attributes: [] } // to ignore rows from join table
                }
            ]
        });
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({
                error: "Book not found."
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            error: error.errors[0].message
        });
    }
});

app.delete("/books/:bookId", async (req, res) => {
    try {
        const count = await db.book.destroy({
            where: { id: req.params.bookId }
        });
        if (count === 0) {
            res.status(400).json({
                error: "The book you are trying to delete does not exist."
            });
        } else {
            console.log(count);
            res.status(204).send();
        }
    } catch (error) {
        console.log(error);
        res.json({
            error: error.errors[0].message
        });
    }
});

app.post("/books/:bookId/reviews", async (req, res) => {
    try {
        const review = await db.review.create({
            bookId: req.params.bookId,
            ...req.body
        });
        res.json(review);
    } catch (error) {
        console.log(error);
        res.json({
            error: error.errors[0].message
        });
    }
});

app.listen(process.env.PORT, () =>
    console.log(
        `${process.env.ENVIRONMENT} express server listening on port ${process.env.PORT}!`
    )
);
