import { useState } from "react";

import styles from "@/styles/Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${email}`);
    };
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerHeadingContainer}>
                    <div className={styles.mobileHide}>
                        <h2 className={styles.footerHeading}>AFREAKIN</h2>
                        <p className={styles.footerText}>
                            Tribe for the Creative
                        </p>
                        <div className={styles.sitemap}>
                            <p>Home |</p>
                            <p>Store |</p>
                            <p>Gallery |</p>
                            <p>Events |</p>
                            <p>About </p>
                        </div>
                    </div>
                    <div className={styles.newsLetter}>
                        <p>Subscribe to our newsletter</p>
                        <form>
                            <div className={styles.inputBox}>
                                <input
                                    type="text"
                                    required={true}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email here"
                                />
                                <button
                                    className={styles.submitButton}
                                    onClick={handleSubmit}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                        <div className={styles.iconsContainer}>
                            <FacebookIcon />
                            <EmailIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                        </div>
                    </div>
                </div>
                <div className={styles.copyrightCon}>
                    <div className={styles.tcContainer}>
                        <p>Terms and Conditions</p>
                        <p className={styles.mobileHide}>|</p>
                        <p>Privacy Policy</p>
                    </div>
                    <p>
                        <span>&copy;</span> 2022 Afreakin. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
