import styles from "./ServerInfo.module.css";
import german_icon from "../assets/germany-flag.svg";
import Settings from "./Settings";
import Maps from "./Maps";
function ServerInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p className={styles.name}>! RC3-BASEMAPS</p>
                <div className={styles.name_below}>
                    <img src={german_icon} alt="flag" />
                    <p>CONQUEST LARGE</p>
                    <p>-</p>
                    <p>LANGCANG DAM</p>
                    <p>-</p>
                    <p>CUSTOM</p>
                    <p>-</p>
                    <p>60 HZ</p>
                </div>
                <p className={styles.desc}>
                    Server protected by The_K-50 AntiCheat. Vip !Rules,
                    Questions, Request, Appeal, Visit us: www.epg.gg | Discord
                    https://discord.gg/3r5NK4d
                </p>
            </div>
            <div className={styles.btns}>
                <button className={styles.btn}>JOIN</button>
                <button className={styles.btn}>SPECTATE</button>
                <button className={styles.btn}>JOIN AS COMMANDER</button>
                <button className={styles.btn}>★ 13672</button>
            </div>
            <div className={styles.info_container}>
                <div className={styles.info}>
                    <p>PLAYERS</p>
                    <p>60/64</p>
                </div>
                <div className={styles.info}>
                    <p>PING</p>
                    <p>104ms</p>
                </div>
                <div className={styles.info}>
                    <p>TICKRATE</p>
                    <p>60Hz</p>
                </div>
            </div>
            <Settings />
            <Maps />
        </div>
    );
}

export default ServerInfo;
