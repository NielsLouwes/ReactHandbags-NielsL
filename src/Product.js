import React from 'react'

 function Product(props) {
    console.log("What are props?" , props)
    return (
        <article>
            <span>{props.tag}</span>
            <img src={props.image} alt=""/>
            <p>{props.productName}</p>
            <h4>{props.productPrice}</h4>
        </article>

    )
}

export default Product;