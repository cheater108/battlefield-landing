import styles from "./Settings.module.css";
function Settings() {
    return (
        <div className={styles.container}>
            <div className={styles.setting_col}>
                <p>SETTINGS</p>
                <div className={styles.setting}>
                    <p>REGION</p>
                    <p>EUROPE - DE</p>
                </div>
                <div className={styles.setting}>
                    <p>PUNKBASTER</p>
                    <p>ON</p>
                </div>
                <div className={styles.setting}>
                    <p>FAIRFIGHT</p>
                    <p>ON</p>
                </div>
                <div className={styles.setting}>
                    <p>PASSWORD</p>
                    <p>ON</p>
                </div>
                <div className={styles.setting}>
                    <p>PRESET</p>
                    <p>NORMAL</p>
                </div>
            </div>
            <div className={styles.setting_col}>
                <p>ADVANCED</p>
                <div className={styles.setting}>
                    <p>MINIMAP</p>
                    <p>ON</p>
                </div>
                <div className={styles.setting}>
                    <p>ONLY SQUAD LEADER SPAWN</p>
                    <p>OFF</p>
                </div>
                <div className={styles.setting}>
                    <p>VEHICLES</p>
                    <p>ON</p>
                </div>
                <div className={styles.setting}>
                    <p>TEAM BALANCE</p>
                    <p>ON</p>
                </div>
                <div className={styles.setting}>
                    <p>MINIMAP SPOTTING</p>
                    <p>ON</p>
                </div>
                <div className={styles.setting}>
                    <p>HUD</p>
                    <p>ON</p>
                </div>
                <div className={styles.setting}>
                    <p>3P VEHICLE CAM</p>
                    <p>ON</p>
                </div>
                <div className={styles.setting}>
                    <p>REGENERATIVE HEALTH</p>
                    <p>ON</p>
                </div>
                <div className={styles.setting}>
                    <p>KILL CAM</p>
                    <p>ON</p>
                </div>
                <div className={styles.setting}>
                    <p>FRIENDLY FIRE</p>
                    <p>OFF</p>
                </div>
                <div className={styles.setting}>
                    <p>3D SPOTTING</p>
                    <p>ON</p>
                </div>
                <div className={styles.setting}>
                    <p>ENEMY NAME TAGS</p>
                    <p>ON</p>
                </div>
            </div>
            <div className={styles.setting_col}>
                <p>RULES</p>
                <div className={styles.setting}>
                    <p>TICKETS</p>
                    <p>400</p>
                </div>
                <div className={styles.setting}>
                    <p>VEHICLE SPAWN DELAY</p>
                    <p>25</p>
                </div>
                <div className={styles.setting}>
                    <p>BULLET DAMAGE</p>
                    <p>100</p>
                </div>
                <div className={styles.setting}>
                    <p>KICK AFTER TEAM KILLS</p>
                    <p>5</p>
                </div>
                <div className={styles.setting}>
                    <p>PLAYER HEALTH</p>
                    <p>100</p>
                </div>
                <div className={styles.setting}>
                    <p>PLAYER RESPAWN TIME</p>
                    <p>100</p>
                </div>
                <div className={styles.setting}>
                    <p>KICK AFTER IDLE</p>
                    <p>300</p>
                </div>
                <div className={styles.setting}>
                    <p>BAN AFTER KICKS</p>
                    <p>3</p>
                </div>
            </div>
        </div>
    );
}

export default Settings;
