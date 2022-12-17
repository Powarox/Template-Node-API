import {} from "dotenv/config";

export default {
    port: process.env.PORT,
    api: {
        restApiKey: process.env.REST_API_KEY,
    },
    mongo: {
        url: process.env.MONGO_URL,
    },
};
