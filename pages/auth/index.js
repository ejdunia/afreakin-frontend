import React from "react";
import styles from "../../styles/Auth.module.css";

const Auth = () => {
    return (
        <div className={styles.container}>
            <h1 className="h1Tag">Login</h1>{" "}
            <form className={styles.form}>
                <label className={styles.label} htmlFor="id">
                    Id
                </label>
                <input className={styles.input} type="text" name="id" id="id" />
                <label className={styles.label} htmlFor="password">
                    Password
                </label>
                <input
                    className={styles.input}
                    type="password"
                    name="password"
                    id="password"
                />
                <button className={styles.loginBtn} type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Auth;
