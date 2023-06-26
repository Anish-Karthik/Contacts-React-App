import React from "react";
import Card from "./Card.jsx";

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card {...props.contacts[0]} />
      <Card {...props.contacts[1]} />
      <Card {...props.contacts[2]} />
    </div>
  );
}

export default App;
