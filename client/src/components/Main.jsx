import styles from "./Main.module.css";
import back_icon from "../assets/back.svg";
import ServerInfo from "./ServerInfo";

function Main() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.breadcrumb}>
                    <img src={back_icon} alt="back" height={20} />
                    <div className={styles.bread_inner}>
                        <p>MULTIPLAYER</p>
                        <p>/</p>
                        <p>SERVER BROWSER</p>
                        <p>/</p>
                    </div>
                </div>
                <h1 className={styles.heading}>SERVER INFO</h1>
            </div>
            <ServerInfo />
        </div>
    );
}

export default Main;
