if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const router = require("./routes/index");
const cors = require('cors')
const errorHandler = require("./middlewares/errorHandler");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use("/", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
