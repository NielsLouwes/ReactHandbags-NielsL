import React from 'react'



function Buttons (props){
    console.log("What are props?", props)
    return (
        <nav>
            <button type="button" onClick={()=>
                console.log(props.title)
            }>
            <h1>{props.title}</h1>
            </button>
        </nav>
    )
}


export default Buttons;