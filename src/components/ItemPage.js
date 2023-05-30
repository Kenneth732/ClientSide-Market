import React, { useEffect, useState } from "react";

function ItemPage(){
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
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
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ItemPage