import React from "react";
import Box from "@material-ui/core/Box";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { useZoomNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/zoom";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
 
}));
const HeadersMenu = () => {
  const history=useHistory()
  const classes = useStyles();
  return (
    <div>
      <Box height={64} display={"flex"}>
        <NavMenu useStyles={useZoomNavigationMenuStyles}>
          <NavItem className={classes.navItem} onClick={()=>history.push("/")}>
            <>Home</>
          </NavItem>
          <NavItem className={classes.navItem} onClick={()=>history.push("/projects")}>
            <>Projects</>
          </NavItem>
          <NavItem className={classes.navItem} onClick={()=>history.push("/blog")}>
            <>Blog</>
          </NavItem>
          <NavItem className={classes.navItem} onClick={()=>history.push("/contact")}>
            <>Contact</>
          </NavItem>
        </NavMenu>
      </Box>
    </div>
  );
};

export default HeadersMenu;
