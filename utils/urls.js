import Image from "next/image";
export const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export function getStrapiURL(path) {
    return `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}

export async function getCategories() {
    const categories = await fetchAPI("/categories");
    return categories;
}

export async function getCategory(slug) {
    const categories = await fetchAPI(`/categories?slug=${slug}`);
    return categories?.[0];
}

export async function getProducts() {
    const products = await fetchAPI("/products/?populate=*");
    return products;
}

export async function getProduct(slug) {
    const products = await fetchAPI(`/products?slug=${slug}`);
    return products?.[0];
}
/**
 *Given an image return the ur;
 *works for local and deployed strapis
 * @param {any} image
 */

export const fromImageToUrl = (image) => {
    if (!image || image === undefined) {
        return "/vercel.svg";
    }

    if (image.data.attributes.url.indexOf("/") === 0) {
        return `${API_URL}${image.data.attributes.url}`;
    }

    return image.data.attributes.url;
};
