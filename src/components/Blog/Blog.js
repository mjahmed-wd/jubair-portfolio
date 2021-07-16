import { Container, Grid } from "@material-ui/core";
import React from "react";
import BlogPost from "./BlogPost";

const Blog = () => {
  const allPosts=[
    {
      postImgURL: `https://miro.medium.com/max/700/1*V3B1HrFbhnRjL0NV11HCfg.png`,postDate:`05-05-21`,postHeading:` JavaScript: A beginners guide, Part 1`,
      postBody: `Hello Junior Developer, you have finished your HTML and CSS learning, now you want to add some interactivity to your .....`,postURL: `https://mjubairahmed.medium.com/javascript-a-beginners-guide-part-1-47b210cd483d`
  },
    {
      postImgURL: `https://miro.medium.com/max/2560/1*xxQsFYN20WmIQ9Xpc2WPHQ.png`,postDate:`09-05-21`,postHeading:`10 JavaScript concepts that every JavaScript Programmer must know.`,
      postBody: `Null and Undefined are different data types in Javascript.
      Undefined is a variable that has been .....`,postURL: `https://mjubairahmed.medium.com/10-javascript-concepts-that-every-javascript-programmer-must-know-61ba2b2c6709?source=your_stories_page-------------------------------------`
  },
    {
      postImgURL: `https://miro.medium.com/max/2560/1*33XnDk2Aa5pHbF2KC5HqZA.jpeg`,postDate:`08-05-21`,postHeading:`Fundamentals of React.js`,
      postBody: `If you are an absolute beginner or middle of learning React js, then this blog is made for you. Here I will discuss some fundamentals of React .....`,postURL: `https://mjubairahmed.medium.com/fundamentals-of-react-js-bc0e4090330c`
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
          // direction="column"
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
