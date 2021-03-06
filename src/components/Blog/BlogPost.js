import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
import { Box } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: "auto",
    boxShadow: "none",
    borderRadius: 0,
    backgroundColor:"#edfff8"
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

const BlogPost = ({post}) => {
  const {postImgURL,postDate,postHeading,postBody,postURL}=post
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Box m={2} data-aos="zoom-in" data-aos-easing="ease-out-cubic"
    data-aos-duration="1000">
      <Card m={5} className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          classes={mediaStyles}
          image={
            postImgURL
          }
        />
        <CardContent className={styles.content}>
          <TextInfoContent
            classes={textCardContentStyles}
            overline={postDate}
            heading={postHeading}
            body={
            postBody  
            }
          />
         <a rel="noreferrer" target="_blank" href={postURL}>
         <Button color={"primary"} fullWidth className={styles.cta}>
            Find Out More <ChevronRightRounded />
          </Button>
         </a>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogPost;
