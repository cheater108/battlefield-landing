import mapData from "../data/mapData";
import styles from "./Maps.module.css";

function Maps() {
    return (
        <div className={styles.container}>
            <p>MAP ROTATION</p>
            <div className={styles.inner}>
                {mapData.map((data, ind) => (
                    <div key={ind} className={styles.card}>
                        <div
                            className={styles.map_img}
                            style={{ backgroundImage: `url(${data.img})` }}
                        ></div>
                        <div className={styles.map_info}>
                            <p>CONQUEST LARGE</p>
                            <p>{data.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Maps;
