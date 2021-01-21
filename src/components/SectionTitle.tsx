import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Component } from "react";

export const StyledTitle = styled(Typography)({
  display: "flex",
  justifyContent: "center",
});

export class SectionTitle extends Component {
  render() {
    return <StyledTitle variant="h5">{this.props.children}</StyledTitle>;
  }
}
