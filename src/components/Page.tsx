import { styled } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import { Component } from "react";

const MyPage = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  padding: "10px 10px",
  backgroundColor: "#e0e0e0",
});

export class Page extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <MyPage>{this.props.children}</MyPage>
        </Grid>
      </Grid>
    );
  }
}
