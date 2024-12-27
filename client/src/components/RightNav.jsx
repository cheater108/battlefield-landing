import styles from "./RightNav.module.css";
import friend1 from "../assets/friend1.png";
import friend2 from "../assets/friend2.png";
import online from "../assets/online.svg";
import offline from "../assets/offline.svg";
import squad from "../assets/squad.svg";
import join from "../assets/join.svg";

function RightNav() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.top}>
                    <img src={squad} alt="squad" />
                    <p>SQUAD</p>
                </div>
                <div className={styles.bottom}>
                    <img src={join} alt="" />
                    <div>Squad Join</div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.top}>
                    <img src={online} alt="online" />
                    <p>ONLINE</p>
                </div>
                <div className={styles.bottom}>
                    <img
                        style={{
                            opacity: 1,
                            borderLeft: "2px solid green",
                        }}
                        src={friend1}
                        alt="friend"
                    />
                    <div>
                        <p>MaryJane</p>
                        <p>Online</p>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.top}>
                    <img src={offline} alt="offline" />
                    <p>OFFLINE</p>
                </div>
                <div className={styles.bottom}>
                    <img
                        style={{
                            borderLeft: "2px solid white",
                        }}
                        src={friend2}
                        alt="friend"
                    />
                    <div>
                        <p>420</p>
                        <p>Offline</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightNav;
