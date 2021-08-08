import React from 'react';
import ReactDOM from 'react-dom';

export default function Chat(props) {
    return( 
        <>
            <div className="container">
                <div className="col">
                    <div className="d-flex shadow p-3 mb-5 bg-white rounded bd-highlight justify-content-start">
                        <h4>
		                    <p style='font-size:15px'> <b>{ props.userType}: { props.user.name } </b></p>
		                    <p style='font-size:15px'> { props.message } </p>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
}