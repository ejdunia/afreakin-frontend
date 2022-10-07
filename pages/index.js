import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { counterActions } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { API_URL } from "../utils/urls";
import { toTwoDP } from "../utils/format";
import Navbar from "../components/Navbar";

export default function Home({ products }) {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    const addBy = () => {
        dispatch(counterActions.addBy(10));
    };
    return (
        <>
            <h1>Home</h1>
            <h2>{counter}</h2>
            <button onClick={() => increment()}>increment</button>
            <button onClick={() => decrement()}>decrement</button>
            <button onClick={() => addBy()}>add by 10</button>
        </>
    );
}

export async function getStaticProps() {
    // fetch the data
    const product_res = await fetch(`${API_URL}/api/products/?populate=*`);
    const products = await product_res.json();
    // return the data as props
    return {
        props: { products },
    };
}
