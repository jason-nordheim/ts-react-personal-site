import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  CardHeader,
  CardMedia,
  Typography,
  styled,
} from "@material-ui/core";
import React from "react";
import { IBlog } from "../interfaces/IBlog";

interface IBlogProps {
  blog: IBlog;
}

const BlogCard = styled(Card)({});

const Blog = (props: IBlogProps) => {
  return (
    <Grid item>
      <BlogCard key={props.blog.title}>
        <CardContent>
          <CardActionArea>
            <CardHeader>{props.blog.title}</CardHeader>
            {props.blog.img ? (
              <CardMedia
                component="img"
                alt={props.blog.title}
                height="100"
                hidden={!props.blog.img}
                image={props.blog.img ? props.blog.img : undefined}
              ></CardMedia>
            ) : null}
          </CardActionArea>
          <Typography gutterBottom variant="h5" component="h2">
            {props.blog.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.blog.teaser}
          </Typography>
        </CardContent>
      </BlogCard>
    </Grid>
  );
};

export default Blog;
