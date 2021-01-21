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

const MyBlogCard = styled(Card)({
  height: "100%",
});

const BlogCard = (props: IBlogProps) => {
  const placeHolderImg =
    "https://via.placeholder.com/728x90.png?text=No+Image+File";
  return (
    <Grid item xs={12} sm={6} md={4}>
      <MyBlogCard key={props.blog.title}>
        <CardContent>
          <CardActionArea>
            <CardHeader>{props.blog.title}</CardHeader>
            <CardMedia
              style={{ borderRadius: "5px", background: "gray" }}
              component="img"
              alt={props.blog.title}
              height="100"
              placeholder={placeHolderImg}
              image={props.blog.img ? props.blog.img : placeHolderImg}
            ></CardMedia>
          </CardActionArea>
          <Typography gutterBottom variant="h5" component="h2">
            {props.blog.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.blog.teaser}
          </Typography>
        </CardContent>
      </MyBlogCard>
    </Grid>
  );
};

export default BlogCard;
