const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();

// initialize all the middlewares here

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// view engine setup ejs
// app.use(expressLayouts);
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authentication"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});
//app.use("/", require("./routes/index"));
app.use("/api/users", require("./routes/users-routes"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
