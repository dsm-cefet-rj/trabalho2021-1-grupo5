import React from 'react'
import ReactDOM from 'react-dom'
export default function Button(props){
    return(
        <button className="btn" onClick={props.onClick}>{props.title}</button>
    );
}