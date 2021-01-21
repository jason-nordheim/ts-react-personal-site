import React from "react";
import { styled } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";

const StyledGridItem = styled(Grid)({});
const StyledNavLink = styled(NavLink)({
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

interface INavBarLinksProps {
  label: string;
  to: string;
  icon: any | undefined;
}

export default function StyledNavBarLink(props: INavBarLinksProps) {
  return (
    <StyledGridItem>
      <StyledNavLink to={props.to}>
        {props.icon ? props.icon : null}
        {props.label}
      </StyledNavLink>
    </StyledGridItem>
  );
}
