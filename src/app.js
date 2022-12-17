import express from "express";
import {} from "dotenv/config";
import bodyParser from "body-parser";

import connectDb from "./services/mongoose.js";
import * as response from "./helpers/responses.js";

import route from "./routes/xx.routes.js";


const app = express();
app.use(express.json());
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(route);


// Need to update MONGO_URL in .env
// connectDb().catch((err) => console.log(err));


app.all("*", (req, res) => {
    response.notFoundResponse(res, "Page Not Found ❌");
});

app.listen(process.env.PORT, () => {
    console.log("Server is Running ✔️");
});
