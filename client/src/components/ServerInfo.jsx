import styles from "./ServerInfo.module.css";
import german_icon from "../assets/germany-flag.svg";
import Settings from "./Settings";
import Maps from "./Maps";
import { useEffect, useState } from "react";
import { basicInfo } from "../data/placeholder";
import { getServerInfo } from "../apis/getServerData";
function ServerInfo() {
    const [info, setInfo] = useState(basicInfo);

    useEffect(() => {
        getServerInfo(1).then((data) => setInfo(data));
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p className={styles.name}>{info.name}</p>
                <div className={styles.name_below}>
                    <img src={german_icon} alt="flag" />
                    <p>{info.type}</p>
                    <p>-</p>
                    <p>{info.map}</p>
                    <p>-</p>
                    <p>{info.custom}</p>
                    <p>-</p>
                    <p>{info.freq} HZ</p>
                </div>
                <p className={styles.desc}>{info.description}</p>
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
                    <p>{info.players}/64</p>
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
