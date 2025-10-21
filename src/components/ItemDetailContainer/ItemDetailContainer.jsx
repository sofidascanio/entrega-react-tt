import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
    const [ detail, setDetail ] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if(!response.ok) {
                    throw new Error("No se encontro el producto");
                }

                return response.json();
            })
            .then((data) => {
                const found = data.find(product => product.id === id);
                if (found) {
                    setDetail(found); 
                } else {
                    throw new Error("Producto no encontrado");
                }
            })
            .catch(() => {});
    }, [id]);

    return (
        <main className="item-detail-container">
            {Object.keys(detail).length ? <ItemDetail detail={detail} /> : <p className="loading-message"> Cargando ... </p>}
        </main>
    );
}