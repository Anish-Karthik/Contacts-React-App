import React from "react";
import Avatar from "./Avatar.jsx";
import Card from "./Card.jsx";

function createCard(contact) {
  return <Card key={contact.id} {...contact} />;
}

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar src="https://media.licdn.com/dms/image/D5603AQHHUyC6Rqat2Q/profile-displayphoto-shrink_800_800/0/1684829503851?e=2147483647&v=beta&t=j6PwH33Y65ie-IbEGNl5byJVRKGqhZi05isOGDVArx0" />
      {props.contacts.map(createCard)}
    </div>
  );
}

export default App;
