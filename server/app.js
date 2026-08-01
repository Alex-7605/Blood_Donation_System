import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes/index.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/health", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Server is running.",
    });
});

app.use("/api/v1", routes);

app.use(errorHandler);

export default app;