import React, { useRef, useState } from "react";

import { styled } from "@material-ui/core/styles";
import {
  Grid,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Typography,
} from "@material-ui/core";

import { AppRoutes } from "../config/AppRoutes";

import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

const MyLogo = styled(Grid)({
  display: "flex",
});

const MyNav = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 10px",
});

const DesktopLink = styled(NavLink)({
  display: "flex",
  color: "inherit",
  textDecoration: "none",
  alignItems: "center",
  "&:hover": {
    textDecoration: "underline",
    transition: "0.3s ease",
  },
  "& svg": {
    fontSize: "14px",
    padding: "3px",
  },
});

const MobileLink = styled(NavLink)({
  display: "flex",
  width: "100%",
  padding: "10px 20px",
  color: "inherit",
  textDecoration: "none",
  alignItems: "center",
  "&:hover": {
    textDecoration: "underline",
    transition: "0.3s ease",
  },
});

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const desktopLinks = AppRoutes.map((r) => (
    <DesktopLink key={r.path} to={r.path}>
      <Typography>{r.label}</Typography>
    </DesktopLink>
  ));

  const mobileLinks = AppRoutes.map((r) => (
    <MenuItem key={r.path} onClick={() => setOpen(false)}>
      <MobileLink to={r.path}>
        <Typography>{r.label}</Typography>
      </MobileLink>
    </MenuItem>
  ));
  return (
    <MyNav container>
      <MyLogo item>
        <Typography>Jason Nordheim</Typography>
      </MyLogo>
      <Hidden only={["xs", "sm"]}>{desktopLinks}</Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <IconButton ref={ref}>
          <MenuIcon onClick={() => setOpen(true)} />
        </IconButton>
        <Menu
          open={open}
          anchorEl={ref.current}
          onClose={() => setOpen(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          children={<div>{mobileLinks}</div>}
        ></Menu>
      </Hidden>
    </MyNav>
  );
}
