import React from "react";
import { Page } from "../components/Page";
import { SectionTitle } from "../components/SectionTitle";
import { useBlogs } from "../hooks/useBlogs";
import { Grid } from "@material-ui/core";
import BlogCard from "../components/Blog";
import { styled } from "@material-ui/core/styles";

const MyBlogGrid = styled(Grid)({
  margin: "auto",
});

export default function BlogPage() {
  const blogs = useBlogs();
  return (
    <Page>
      <SectionTitle>Blogs</SectionTitle>
      <MyBlogGrid container spacing={3} xs={12}>
        {blogs?.map((b) => {
          return <BlogCard key={b.title} blog={b} />;
        })}
      </MyBlogGrid>
    </Page>
  );
}
