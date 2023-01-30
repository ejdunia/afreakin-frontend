import React from "react";
import styles from "@/styles/shippingForm.module.css"
import ShippingForm from "@/components/ShippingForm";

const shipping = () => {
    return (
        <div className={styles.container}>
            <ShippingForm />
        </div>
    );
};

export default shipping;
