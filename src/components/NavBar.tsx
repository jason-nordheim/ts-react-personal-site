import React from "react";

import { styled } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { AppRoutes } from "../config/routes";

import StyledNavBarLink from "./NavBar.link";
import StyledNavBarLogo from "./NavBar.logo";

const StyledNav = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 10px",
});

export default function NavBar() {
  return (
    <StyledNav>
      <StyledNavBarLogo />
      {AppRoutes.map((r) => (
        <StyledNavBarLink
          key={r.label}
          to={r.to}
          icon={r.icon}
          label={r.label}
        />
      ))}
    </StyledNav>
  );
}
