const express = require("express");
const app = express();
const port = 5000;


const routes = require("./routes/router");


app.use("/", routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
