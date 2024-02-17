const express = require("express");
const dotenv = require("dotenv");
const routes = require("./src/routes");

const app = express();
app.use(express.json());

dotenv.config();

app.use("/", routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
