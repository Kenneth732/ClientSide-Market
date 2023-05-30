import React, { useEffect, useState } from "react";
import './ItemPage.css'

function ItemPage() {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)
    const [cart, setCart] = useState([]);

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

    function handleAddItem(product){
        setCart([...cart, product])
    }

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
        setCart(updatedCart);
    };

    const calculateTotal = () => {
        return cart.reduce((total, items) => total + items.price, 0)
    };

    return (
        <div className="Item">
            {items.map((animal) => (
                <div key={animal.id} className="item-card">
                    <div className="card" onClick={() => handleCardClick(animal)}>
                        <div className="image-card">
                            <img src={animal.images} alt="animal" />
                        </div>
                        <div className="text-card">
                            <h2 className="item-price">Price: ${animal.price}</h2>
                            <h2 className="item-name">{animal.name}</h2>
                            <p className="item-description">{animal.description}</p>
                        </div>
                    </div>
                </div>
            ))}

            {selectedItem && (
                <div className="overlay" onClick={handleCloseClick}>
                    <div className="zoomed-card">
                        <img src={selectedItem.images} alt="animal" />
                        <div className="text-card">
                            <h2 className="animal-name">{selectedItem.name}</h2>
                            <p className="animal-description">{selectedItem.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default ItemPage