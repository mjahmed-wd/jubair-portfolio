import { Container, Grid } from "@material-ui/core";
import React from "react";
import BlogPost from "./BlogPost";

const Blog = () => {
  const allPosts=[
    {
      postImgURL: `https://miro.medium.com/max/700/1*V3B1HrFbhnRjL0NV11HCfg.png`,postDate:`05-05-21`,postHeading:` JavaScript: A beginners guide, Part 1`,
      postBody: `Hello Junior Developer, you have finished your HTML and CSS learning, now you want to add some interactivity to your website? Let me .....`,postURL: `https://mjubairahmed.medium.com/javascript-a-beginners-guide-part-1-47b210cd483d`
  },
]
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
          direction="column"
          justify="center"
          alignItems="center"
        >
          {/* <Grid item 
          md={4}
          xs={12}>
            <BlogPost />
          </Grid> */}
          {
            allPosts.map((post,index)=><Grid key={index} item 
              md={4}
              xs={12}>
                <BlogPost post={post} />
              </Grid>)
          }
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;
