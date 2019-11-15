import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

export function ContactItem({ _id, avatar, name, lastMessage, selected, onContactSelect }) {
  function onClick() {
    if (onContactSelect) {
      onContactSelect(_id);
    }
  }

  return (
    <ListItem alignItems="flex-start" button selected={selected} onClick={onClick}>
      <ListItemAvatar>
        <Avatar alt={name} src={avatar}>
          A
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={lastMessage} />
    </ListItem>
  );
}
