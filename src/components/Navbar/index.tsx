import { blockLeadsLogo } from "../../assets";
import styles from "./Navbar.module.scss";

export default function Navbar() {
    return (
        <div className={styles.main}>
            <img src={blockLeadsLogo} alt="BlockLeads" />
        </div>
    );
}