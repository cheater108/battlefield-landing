import styles from "./SideMenu.module.css";
import career1 from "../assets/career1.png";
import career2 from "../assets/career2.png";
import career3 from "../assets/career3.png";
import career4 from "../assets/career4.png";
import career5 from "../assets/career5.png";
import news from "../assets/side-menu__news.svg";
import watch from "../assets/side-menu__watch.svg";
import quit from "../assets/side-menu__quit.svg";
import help from "../assets/side-menu__help.svg";

function SideMenu() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.item}>
                    <img src={career3} alt="career" />
                    <p className={styles.tooltip}>BATTLEFIELD V</p>
                </div>
                <div className={styles.item}>
                    <img src={career2} alt="career" />
                    <p className={styles.tooltip}>BATTLEFIELD 1</p>
                </div>
                <div className={`${styles.selected} ${styles.item}`}>
                    <img src={career4} alt="career" />
                    <p
                        className={styles.tooltip}
                        style={{ marginLeft: "10px" }}
                    >
                        BATTLEFIELD 4
                    </p>
                </div>
                <div className={styles.item}>
                    <img src={career5} alt="career" />
                    <p className={styles.tooltip}>BATTLEFIELD HARDLINE</p>
                </div>
                <div className={styles.item}>
                    <img src={career1} alt="career" />
                    <p className={styles.tooltip}>CAREER</p>
                </div>
                <div className={styles.item}>
                    <img src={watch} alt="career" />
                    <p className={styles.tooltip}>WATCH</p>
                </div>
                <div className={styles.item}>
                    <img src={news} alt="career" />
                    <p className={styles.tooltip}>NEWS</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.item}>
                    <img src={help} alt="help" />
                    <p className={styles.tooltip}>HELP</p>
                </div>
                <div className={styles.item}>
                    <img src={quit} alt="quit" />
                    <p className={styles.tooltip}>QUIT</p>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
