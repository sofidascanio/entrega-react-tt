import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if(!response.ok) {
                    throw new Error("Hubo un problema al buscar productos");
                }

                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])


    return (
        <section className="item-list-container"> 
            <h1> Bienvenidos a Estilo </h1>
            <div>
                <ItemList list={products} />
            </div>
        </section>
    );
}