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
                <div>
                    <img src={career3} alt="career" />
                </div>
                <div>
                    <img src={career2} alt="career" />
                </div>
                <div className={styles.selected}>
                    <img src={career4} alt="career" />
                </div>
                <div>
                    <img src={career5} alt="career" />
                </div>
                <div>
                    <img src={career1} alt="career" />
                </div>
                <div>
                    <img src={watch} alt="career" />
                </div>
                <div>
                    <img src={news} alt="career" />
                </div>
            </div>
            <div className={styles.bottom}>
                <div>
                    <img src={help} alt="help" />
                </div>
                <div>
                    <img src={quit} alt="quit" />
                </div>
            </div>
        </div>
    );
}

export default SideMenu;
