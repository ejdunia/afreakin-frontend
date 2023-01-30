import React, { useState } from "react";
import styles from "@/styles/shippingForm.module.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ShippingForm = () => {
    const [fName, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(null);
    const [country, setCountry] = useState("Nigeria");
    const [state, setState] = useState("Abuja");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    const handleUpdate = (e) => {
        e.preventDefault();
        alert(`${fName}, ${email} , ${message} `);
    };

    const handleStateChange = (e) => {
        setState(e.target.value);
    };
    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <div className={styles.inputBox}>
                    <input
                        type="text"
                        required={true}
                        value={fName}
                        onChange={(e) => setFname(e.target.value)}
                    />
                    <label>Full name</label>
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
                <div className={styles.inputBox}>
                    <input
                        maxLength={11}
                        type="number"
                        pattern="[1-9]"
                        required={true}
                        value={phone}
                    />
                    <label>Phone</label>
                </div>
                <div className={styles.flex}>
                    <p>Country: Nigeria</p>
                    <div className={styles.selectContainer2}>
                        <p className={styles.selectHeader}>State</p>
                        <div className={styles.qtyBtnCont}>
                            <FormControl
                                variant="standard"
                                sx={{
                                    m: 1,
                                    minWidth: 120,
                                    fontSize: 70,
                                }}
                                size="large"
                            >
                                <InputLabel id="state"></InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={state}
                                    label="state"
                                    onChange={handleStateChange}
                                >
                                    <MenuItem disabled value="">
                                        <em>State</em>
                                    </MenuItem>
                                    <MenuItem value={"small"}>Lagos</MenuItem>
                                    <MenuItem value={"medium"}>Abuja</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className={styles.inputBox}>
                    <input
                        type="text"
                        required={true}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <label>Address</label>
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
                    Proceed to payment
                </button>
            </form>
        </div>
    );
};

export default ShippingForm;
