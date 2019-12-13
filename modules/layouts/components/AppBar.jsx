import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  makeStyles
} from "@material-ui/core";

import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `100%`,
    marginLeft: "25%"
  },
  title: {
    flexGrow: 1
  },
  appBarMenuLinks: {
    textDecoration: "none",
    color: "white"
  }
}));

function TopAppBar({ history }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLogout() {
    Meteor.logout();
    setAnchorEl(null);
  }

  function handleProfile() {
    history.push("/profile");
    setAnchorEl(null);
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.title}>
          Omnitron
        </Typography>
        <Link to="/chats" className={classes.appBarMenuLinks}>
          <Button color="inherit">Chats</Button>
        </Link>
        <Link to="/transports" className={classes.appBarMenuLinks}>
          <Button color="inherit">Transports</Button>
        </Link>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleProfile}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(TopAppBar);