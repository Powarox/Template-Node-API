import {} from "dotenv/config";
import * as response from "../helpers/responses.js";

function authorization(req, res, next) {
    if (req.headers.authorization === process.env.REST_API_KEY) {
        next();
    } else {
        response.unauthorizedResponse(res, "Access denied");
    }
}

export default authorization;
