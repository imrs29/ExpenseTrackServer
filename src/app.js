const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv");
const cors = require("cors");
const incomeRoute = require("./routes/income/incomeRoutes");
const userRoute = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const expenseRoute = require("./routes/expenses/expenseRoutes");
const accountStatsRoute = require("./routes/accountStatsRoute/accountStatsRoute");
const app = express();

//env
dotenv.config();
//dbConnect
dbConnect();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome To Expenses Tracker API" });
});
// users routes
app.use("/api/users", userRoute);
//account stats routes
app.use("/", accountStatsRoute);

//income routes
app.use("/api/income", incomeRoute);

//expenses Route
app.use("/api/expenses", expenseRoute);

//Error
app.use(notFound);
app.use(errorHandler);

//income
//expenses

module.exports = app;
