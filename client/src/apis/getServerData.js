import axios from "axios";

async function getServerInfo(id) {
    const result = await axios.get("/server/info", { id });
    return result.data;
}

async function getServerSettings(id) {
    const result = await axios.get("/server/settings", { id });
    return result.data;
}

export { getServerInfo, getServerSettings };
