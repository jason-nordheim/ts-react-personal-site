import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Component } from "react";

export const StyledTitle = styled(Typography)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  margin: "auto",
});

export class SectionTitle extends Component {
  render() {
    return <StyledTitle variant="h5">{this.props.children}</StyledTitle>;
  }
}
