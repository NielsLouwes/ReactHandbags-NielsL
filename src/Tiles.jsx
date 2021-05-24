import React from 'react'

function Tiles (props){
    return(
        <section>
            <img src= {props.image} alt=""/>
            <h2>{props.heading}</h2>
            <p>{props.story}</p>
        </section>
    )
}

export default Tiles;