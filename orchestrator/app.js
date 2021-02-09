const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/index')
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/', router)

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
