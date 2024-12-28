import { useEffect, useState } from "react";
import styles from "./Settings.module.css";
import { serverSettings } from "../data/placeholder";
import { getServerSettings } from "../apis/getServerData";

function Settings() {
    const [settings, setSettings] = useState(serverSettings);

    useEffect(() => {
        getServerSettings(1).then((data) => setSettings(data));
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.setting_col}>
                <p>SETTINGS</p>
                {Object.keys(settings.settings).map((key) => (
                    <div key={key} className={styles.setting}>
                        <p>{key.toUpperCase()}</p>
                        <p>{settings.settings[key]}</p>
                    </div>
                ))}
            </div>
            <div className={styles.setting_col}>
                <p>ADVANCED</p>
                {Object.keys(settings.advanced).map((key) => (
                    <div key={key} className={styles.setting}>
                        <p>{key.toUpperCase()}</p>
                        <p>{settings.advanced[key]}</p>
                    </div>
                ))}
            </div>
            <div className={styles.setting_col}>
                <p>RULES</p>
                {Object.keys(settings.rules).map((key) => (
                    <div key={key} className={styles.setting}>
                        <p>{key.toUpperCase()}</p>
                        <p>{settings.rules[key]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Settings;
