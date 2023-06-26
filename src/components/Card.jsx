import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="top">
        <p> {props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.src} />
      </div>
      <div className="bottom">
        <Detail info={props.phone} />
        <Detail info={props.email} />
      </div>
    </div>
  );
}

export default Card;
