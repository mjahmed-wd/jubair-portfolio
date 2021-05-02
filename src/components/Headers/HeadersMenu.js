import React from "react";
import Box from "@material-ui/core/Box";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { useZoomNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/zoom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 
}));
const HeadersMenu = () => {
  const classes = useStyles();
  return (
    <div>
      <Box height={64} display={"flex"}>
        <NavMenu useStyles={useZoomNavigationMenuStyles}>
          <NavItem className={classes.navItem}>
            <>Home</>
          </NavItem>
          <NavItem className={classes.navItem}>
            <>Projects</>
          </NavItem>
          <NavItem className={classes.navItem}>
            <>Blog</>
          </NavItem>
          <NavItem className={classes.navItem}>
            <>Contact</>
          </NavItem>
        </NavMenu>
      </Box>
    </div>
  );
};

export default HeadersMenu;
