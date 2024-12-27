import express from "express";
import path from "path";
import {
    getServerInfo,
    getServerSettings,
} from "./controllers/serverController.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/server/info", getServerInfo);
app.get("/server/settings", getServerSettings);

app.use(express.static(path.resolve("dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve("dist", "index.html"));
});

app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

app.listen(port, () => console.log("Server started on port", port));
