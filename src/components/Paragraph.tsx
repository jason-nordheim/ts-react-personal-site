import React, { Component } from "react";
import { Typography } from "@material-ui/core";

export default class Paragraph extends Component {
  render() {
    return (
      <Typography variant="body2" paragraph>
        {this.props.children}
      </Typography>
    );
  }
}
