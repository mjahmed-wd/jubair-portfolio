import { Container, Grid } from "@material-ui/core";
import React from "react";
import BlogPost from "./BlogPost";

const Blog = () => {
  return (
    <div style={{ padding: "50px 0", }}>
      <Container>
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              display: "inline-block",
              fontWeight: "600",
              borderBottom: "5px solid #009E66",
            }}
          >
            BLOGS
          </h1>
        </div>
        <Grid
          container
          spacing={2}
        >
          <Grid item 
          md={4}
          xs={12}>
            <BlogPost />
          </Grid>
          <Grid item 
          md={4}
          xs={12}>
            <BlogPost />
          </Grid>
          <Grid item 
          md={4}
          xs={12}>
            <BlogPost />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;
