import { FormControl, Input, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.scss";
import db from "./component/firebase";
import Message from "./component/Message";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const App = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessage(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="App">
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <IconButton
            variant="contained"
            disabled={!input}
            color="primary"
            type="submit"
            onClick={sendMessage}
            className="app__iconButton"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <Container>
        <FlipMove>
          {message.map(({ id, message }) => {
            return <Message key={id} username={username} message={message} />;
          })}
        </FlipMove>
      </Container>
    </div>
  );
};

export default App;
