import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import InputWithIcon from "./SearchBook";

export default function ButtonAppBar() {
  const location = useLocation();

  const getButtonText = () => {
    if (location.pathname === "/") {
      return "Bookshelf";
    } else {
      return "Back to Search";
    }
  };

  const getSearchInput = () => {
    if (location.pathname === "/") {
      return <InputWithIcon />;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#5e676b" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            variant="outlined"
            component={Link}
            to={location.pathname === "/" ? "/bookshelf" : "/"}
            sx={{ color: "#fff", borderColor: "#fff" }}
          >
            {getButtonText()}
          </Button>
        </Toolbar>
      </AppBar>
      {getSearchInput()}
    </Box>
  );
}
