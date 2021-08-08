import React from 'react';

export default function Jumbotron(props) {
  return(
    <>
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container">
          <h1 className="display-6" style="color:purple"> { props.title } <img src={props.image} width="30" height="30" className="d-inline-block" alt=""></img></h1>
          <p className="lead">{props.text}</p>
        </div>
      </div>
    </>
  );
}