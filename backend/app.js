const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const partnerRoutes = require("./routes/partner.routes");
const connectToDb = require("./db/db");
connectToDb();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extented: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/users", userRoutes);
app.use("/partners", partnerRoutes);

module.exports = app;
