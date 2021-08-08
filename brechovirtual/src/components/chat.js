import React from 'react';
import ReactDOM from 'react-dom';

export default function Chat(props) {
    return( 
        <>
           
                <div className="col">
                    {props.messages.map((message) => {
                        return (
                                <div className="d-flex shadow p-3 mb-5 bg-white rounded bd-highlight justify-content-start">
                                    <h4>
                                        <p style='font-size:15px'> <b>{ props.messages.userType}: { props.messages.userName } </b></p>
                                        <p style='font-size:15px'> { props.messages.message } </p>
                                    </h4>
                                </div>
                     )
                    })}
                </div>
                       
        </>
    );
}