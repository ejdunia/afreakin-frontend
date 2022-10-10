import React from "react";
import styles from "../../styles/Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

// todo 
// change the auth link to show profile icon if isLoggedIn == true

const Auth = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch()
    console.log(isLoggedIn);
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch actions
        dispatch(authActions.login())
    };
    return (
        <div className={styles.container}>
            <h1 className="h1Tag">Login</h1>{" "}
            <form className={styles.form} onSubmit={handleSubmit}>
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
