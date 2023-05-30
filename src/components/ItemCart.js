import React from "react";

function ItemCart({ item, onAddToCart, onRemoveToCart }) {
    return (
        <React.Fragment>
            <div>
                
            </div>
            {/* {items.map((animal) => (
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
            )} */}
        </React.Fragment>
    )
}
export default ItemCart;