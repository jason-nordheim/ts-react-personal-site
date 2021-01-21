import React from "react";
import { Grid, styled } from "@material-ui/core";

const NavBarLogo = styled(Grid)({
  display: "flex",
});

export default function StyledNavBarLogo() {
  return <NavBarLogo item>Jason Nordheim</NavBarLogo>;
}
