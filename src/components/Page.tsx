import { styled } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Component } from "react";

export const StyledPage = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  padding: "10px 10px",
});

export class Page extends Component {
  render() {
    return <StyledPage>{this.props.children}</StyledPage>;
  }
}
