import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";
import styles from "./Home.module.scss";

export default function Home() {
    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.titleContainer}>
                    <h1>BlockLeads</h1>
                    <h4>Your Gateway to Free USDC</h4>
                    <h4>- Simple, Secure, Instant!</h4>
                </div>
                <Form />
            </div>
            <Footer />
        </div>
    );
}