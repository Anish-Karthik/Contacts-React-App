import React from "react";
import Avatar from "./Avatar.jsx";
import Card from "./Card.jsx";

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar src="https://media.licdn.com/dms/image/D5603AQHHUyC6Rqat2Q/profile-displayphoto-shrink_800_800/0/1684829503851?e=2147483647&v=beta&t=j6PwH33Y65ie-IbEGNl5byJVRKGqhZi05isOGDVArx0" />
      <Card {...props.contacts[0]} />
      <Card {...props.contacts[1]} />
      <Card {...props.contacts[2]} />
    </div>
  );
}

export default App;
