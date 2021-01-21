import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import React from "react";
import { Page } from "../components/Page";
import { SectionTitle } from "../components/SectionTitle";
import { useBlogs } from "../hooks/useBlogs";
import { Typography } from "@material-ui/core";

export default function BlogPage() {
  const blogs = useBlogs();
  console.log(blogs);
  return (
    <Page>
      <SectionTitle>Blogs</SectionTitle>
      {blogs?.map((b) => {
        console.log(b.title);
        return (
          <Card key={b.title}>
            <CardContent>
              <CardActionArea>
                <CardHeader>{b.title}</CardHeader>
                {b.img ? (
                  <CardMedia
                    component="img"
                    alt={b.title}
                    height="100"
                    hidden={!b.img}
                    image={
                      b.img
                        ? b.img
                        : "https://miro.medium.com/max/1690/1*KOAfAOQ9FwAp9i2muTkGWw.png"
                    }
                  ></CardMedia>
                ) : null}
              </CardActionArea>
              <Typography gutterBottom variant="h5" component="h2">
                {b.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {b.teaser}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Page>
  );
}
