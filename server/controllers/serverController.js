import { basicInfo, serverSettings } from "../data/sampleServerData.js";

function getServerInfo(req, res) {
    const { id } = req.body;
    // fetch data from database
    // using demo data here

    res.json(basicInfo);
}

function getServerSettings(req, res) {
    const { id } = req.body;
    // fetch data from database
    // using demo data here

    res.json(serverSettings);
}

export { getServerInfo, getServerSettings };
