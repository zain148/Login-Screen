import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Navigator3 from "./Navigator3";
import Navigator4 from "./Navigator4";

const Drawer = createDrawerNavigator(
  {
    Screen3: Navigator3,
    Screen4: Navigator4
  },
  {
    drawerBackgroundColor: "pink",
    drawerPosition: "right",
    drawerType: "slide",
    overlayColor: 0.5,
    order: ["Screen4", "Screen3"],
    initialRouteName: "Screen3"
  }
);

const container = createAppContainer(Drawer);
export default container;
