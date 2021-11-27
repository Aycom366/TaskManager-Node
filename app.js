const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorhandlerMiddleware = require("./middleware/errorhandler");

//accessing secrets
require("dotenv").config();

//midddleware
app.use(express.json());
app.use(express.static("./public"));

//routes
const tasks = require("./routes/tasks");

//base routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);

app.use(errorhandlerMiddleware);

//if post is set
const port = process.env.PORT || 3000;

//invoke connect db and only if we successful, we invoke th server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Listening  on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
