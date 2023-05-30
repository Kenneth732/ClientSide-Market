import React, { useEffect, useState } from "react";

function ItemPage(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((res) => res.json())
        .then((itemArrays) => {
            setItems(itemArrays)
        })
    }, [])
    return(
        <div>
            <div>
                {items.map((item) =>(
                    <div key={item.id}>
                        <p>{item.price}</p>
                        <img src={item.images} />
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ItemPage