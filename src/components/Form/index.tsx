import { useState } from "react";
import styles from "./Form.module.scss";
import { baseLogo, etherscanLogo, successIcon } from "../../assets";
import { useSubmitForm } from "../../hooks/useSubmitForm";

export default function Form() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [address, setAddress] = useState<string>("");

    const { submitForm, isPending, isSuccess, transactionLink } = useSubmitForm(name, email, address);

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitForm();
    }

    if (isSuccess)
        return (
            <div className={styles.main}>
                <span>Claim your free USDC in just a few steps!</span>
                <div className={styles.container}>
                    <img className={styles.statusIcon} src={successIcon} alt="Success" />
                    <span className={styles.title}>Congratulations</span>
                    <span className={styles.subtitle}>USDC has been transfered to your wallet!</span>
                    <button onClick={() => window.open(transactionLink, '_blank')}>
                        <img src={etherscanLogo} alt="Etherscan" />
                        View Transaction
                    </button>
                </div>
            </div>
        )
    else
        return (
            <form onSubmit={handleSubmit} className={styles.main}>
                <span>Claim your free USDC in just a few steps!</span>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <span>Name</span>
                        <input
                            value={name}
                            type="text"
                            placeholder="Enter Full Name"
                            required
                            disabled={isPending}
                            onChange={(e) => { setName(e.target.value as string) }}
                        />
                    </div>
                    <div className={styles.row}>
                        <span>Email</span>
                        <input
                            value={email}
                            type="email"
                            placeholder="Enter Email Address"
                            required
                            disabled={isPending}
                            onChange={(e) => { setEmail(e.target.value as string) }}
                        />
                    </div>
                    <div className={styles.row}>
                        <span>Wallet Address</span>
                        <div className={styles.walletContainer}>
                            <div className={styles.chainContainer}>
                                <img src={baseLogo} alt="Base Network" />
                            </div>
                            <input
                                value={address}
                                type="text"
                                placeholder="Enter Wallet Address"
                                required
                                disabled={isPending}
                                onChange={(e) => { setAddress(e.target.value as string) }}
                            />
                        </div>
                    </div>
                    <button type="submit" disabled={isPending} className={`${isPending ? styles.loading : ""}`}>
                        Claim USDC
                    </button>
                </div>
            </form>
        );
}