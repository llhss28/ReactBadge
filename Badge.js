import React from "react"

function Badge(props){
    return(
        <div>
            <h1>Badge:</h1>
            <p>Name: {props.fName} {props.lName}</p>
            <p>Age: {props.age}</p>
            <p>Phone: {props.phone}</p>
            <p>Place of Birth: {props.birth}</p>
            <p>Favorite Food: {props.food}</p>
            <p>Email: {props.email}</p>
            <p>Also: {props.text}</p>
        </div>
    )
}

export default Badge