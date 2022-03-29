import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";
import { CssBaseline } from "@mui/material";
import DrawerContainer from "./Drawer";
import { DrawerHeader, MainContainer, ScrollTopContainer } from "../component";

const drawerWidth = 255;

const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header
        drawerWidth={drawerWidth}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <DrawerContainer
        drawerWidth={drawerWidth}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      <span id="back-to-top-anchor" />
      <DrawerHeader />
      <MainContainer drawerWidth={drawerWidth} open={open}>
        {children}
      </MainContainer>

      <ScrollTopContainer />
    </React.Fragment>
  );
};
Layout.propTypes = {
  children: PropTypes.element.isRequired
};
export default Layout;
