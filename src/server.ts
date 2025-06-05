import app from "./app";
import config from "./config/config";
import cors from "cors";
import { initDb } from "../db/index";

async function startServer() {
    await initDb();
    app.use(cors());
    app.listen(config.port, () => {
        console.log(`Server running on port ${config.port}`);
    });
}

startServer();
