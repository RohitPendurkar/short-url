const express = require("express");

const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;


connectToMongoDb("mongodb://mongodb://127.0.0.1:27017/short-url").then(() => console.log("MongoDb connected"));
app.use("/url", urlRoute);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
