import React, { useEffect, useState } from "react";
import './ItemPage.css'
import ItemList from "./ItemList";

function ItemPage() {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((res) => res.json())
            .then((itemArrays) => {
                setItems(itemArrays)
            })
    }, [])

    function handleCardClick(item) {
        setSelectedItem(item)
    }

    function handleCloseClick() {
        setSelectedItem(null)
    }

    return (
        <div className="Item">
            <ItemList
                items={items}
                selectedItem={selectedItem}
                handleCardClick={handleCardClick}
                handleCloseClick={handleCloseClick}
            />

        </div>
    );
}
export default ItemPage

