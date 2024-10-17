import { coinbaseBadge } from "../../assets";
import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <div className={styles.main}>
            <a href="https://docs.cdp.coinbase.com/mpc-wallet/docs/welcome" target="__blank">
                <img src={coinbaseBadge} alt="Powered by Coinbase MPC Wallets" />
            </a>
        </div>
    );
}