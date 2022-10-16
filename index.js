require("dotenv").config({
    path:
        process.env.ENVIRONMENT === "production"
            ? "./.env.production"
            : "./.env.development"
});
const express = require("express");
// const apiRoutes = require("./src/routes/api.route");

const app = express();

app.use(express.json());

// TODO: serve express build base file
app.get("/", (req, res) => {
    res.json({
        message: "success"
    });
});

// app.use("/api", apiRoutes);

app.listen(process.env.PORT, () =>
    console.log(
        `${process.env.ENVIRONMENT} express server listening on port ${process.env.PORT}!`
    )
);
