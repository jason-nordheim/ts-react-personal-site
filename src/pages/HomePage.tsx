import { styled, Container, Grid, Paper } from "@material-ui/core";
import React, { Component } from "react";

import { Page } from "../components/Page";
import Paragraph from "../components/Paragraph";
import { SectionTitle } from "../components/SectionTitle";
import jasonHeadshot from "../assets/jason.headshot.bg.png";

const StyledImg = styled(Container)({
  display: "flex",
  justifyContent: "center",
  margin: "10px",
});

const MySection = styled(Grid)({
  margin: "auto",
});

const MySectionContent = styled(Paper)({
  padding: "15px",
});

export default class HomePage extends Component {
  render() {
    return (
      <Page>
        <Grid container>
          <MySection item md={8}>
            <MySectionContent>
              <SectionTitle>Get to know Jason</SectionTitle>
              <StyledImg>
                <img src={jasonHeadshot} alt="Jason" height="150px" />
              </StyledImg>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                ullamcorper, neque a interdum elementum, sem velit ultrices
                augue, quis ultrices est quam eget lacus. Vestibulum blandit
                ullamcorper fermentum. Morbi a tempor tortor. Nam ex nunc,
                maximus vitae urna et, congue congue ligula. Nam tempor diam
                est, vitae porta urna sodales id. Fusce interdum vulputate augue
                non imperdiet. Nam sed nisl non magna ultrices semper at sit
                amet sem. Proin consectetur mollis nibh. Vestibulum id sapien
                sit amet magna molestie faucibus. Pellentesque nunc sem, auctor
                et mattis ac, bibendum non velit. Sed eget egestas justo. Fusce
                venenatis purus sem, ac dapibus tortor pretium commodo. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                fringilla massa venenatis cursus dapibus. Praesent suscipit odio
                et dignissim porta.
              </Paragraph>
              <Paragraph>
                Suspendisse congue semper finibus. Maecenas eget tellus
                fringilla, commodo nisl id, posuere justo. Quisque condimentum
                commodo ipsum, mollis elementum neque luctus efficitur. Donec
                pellentesque eros ac orci condimentum rutrum. Ut euismod purus
                eget nulla commodo ultricies. Nam eu tincidunt purus. Aenean
                euismod consectetur orci nec sagittis.
              </Paragraph>
            </MySectionContent>
          </MySection>
        </Grid>
      </Page>
    );
  }
}
