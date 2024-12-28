const basicInfo = {
    id: 1,
    name: "! RC3-BASEMAPS",
    description:
        "Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d",
    players: "60",
    type: "CONQUEST LARGE",
    map: "LANGCANG DAM",
    custom: "CUSTOM",
    freq: "60",
    ping: "104",
    tick: "60",
};

const serverSettings = {
    id: 1,
    settings: {
        region: "EUROPE - DE",
        punkbaster: "ON",
        fairfight: "ON",
        password: "OFF",
        preset: "NORMAL",
    },
    advanced: {
        minimap: "ON",
        "only squad leader spawn": "OFF",
        vehicles: "ON",
        "team balance": "ON",
        "minimap spotting": "ON",
        hud: "ON",
        "3p vehicle cam": "ON",
        "regenerative health": "ON",
        "kill cam": "ON",
        "friendly fire": "OFF",
        "3d spotting": "ON",
        "enemy name tags": "ON",
    },
    rules: {
        tickets: 400,
        "vehicle spawn delay": 25,
        "bullet damage": 100,
        "kick after team kills": 5,
        "player health": 100,
        "plyer respawn time": 100,
        "kick after idle": 300,
        "ban after kicks": 3,
    },
};

export { basicInfo, serverSettings };
