import "dotenv/config";
import express from "express";
import "./database";
import cors from "cors";
import routes from "./routes";
import config from "./config/server";

const app = express();
const port = config.server.port;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log("Server started"));
