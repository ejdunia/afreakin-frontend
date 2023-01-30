import React, { useState } from "react";
import styles from "@/styles/contactForm.module.css";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleUpdate = (e) => {
        e.preventDefault();
        alert(`${name}, ${email} , ${message} `);
    };
    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <div className={styles.inputBox}>
                    <input
                        type="text"
                        required={true}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Name</label>
                </div>

                <div className={styles.inputBox}>
                    <input
                        type="text"
                        required={true}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Email</label>
                </div>

                <div className={styles.textareaContainer}>
                    <label>Message</label>
                    <textarea
                        type="text"
                        required={true}
                        value={message}
                        className={styles.textarea}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button className={`${styles.priBtn}`} onClick={handleUpdate}>
                    SUBMIT
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
