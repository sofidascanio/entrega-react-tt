const BASE_URL = "https://6924cbed82b59600d7216121.mockapi.io/products";

export const createProduct = async(product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(product)
    });

    if (!res.ok) {
        throw new Error("No se pudo crear el producto");
    }

    const result = await res.json();
    return result;
}

