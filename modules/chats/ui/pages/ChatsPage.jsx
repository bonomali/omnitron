import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";

import ChatSearch from "../components/ChatSearch";
import ChatsListWrapper from "../components/chatList/ChatsListWrapper";
import ChatLayout from "../components/messages/ChatLayout";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  messagesGrid: {
    height: "100%",
    overflow: "hidden"
  },
  chatsGrid: {
    height: "100%"
  }
}));

export default function ChatsPage() {
  const [currentChatId, setChatId] = useState(null);
  const [searchChat, setSearchChat] = useState("");

  function onChatSelect(chatId) {
    setChatId(chatId);
  }

  const onChatSearch = function(text) {
    setSearchChat(text);
    setChatId(null);
  };

  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="center" spacing={0}>
      <Grid item xs={4} className={classes.chatsGrid}>
        <Box height="calc(100% - 50px)">
          <ChatSearch searchChat={searchChat} onChatSearch={onChatSearch} />
          <Divider />
          <ChatsListWrapper
            searchChat={searchChat}
            chatId={currentChatId}
            onChatSelect={onChatSelect}
          />
        </Box>
      </Grid>
      <Grid item xs={8} className={classes.messagesGrid}>
        <ChatLayout chatId={currentChatId} />
      </Grid>
    </Grid>
  );
}
