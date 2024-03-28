require("dotenv").config();
const express = require("express");
const cors = require("cors");
const notFound = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");
const authRoute = require("./routes/auth-route");
const imagesRoute = require("./routes/images-route");
const multer = require('multer')
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/images",imagesRoute);

app.use(notFound);

app.use(errorMiddleware);



const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server run on port" + " " + port);
});
