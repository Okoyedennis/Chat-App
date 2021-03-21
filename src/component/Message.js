import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Style/Message__card.scss";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={isUser ? " message message__user" : "message"}>
      <Card className={isUser ? "message__userCard" : "message__guessCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username || "Unknown User"}:`}{" "}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});
export default Message;
