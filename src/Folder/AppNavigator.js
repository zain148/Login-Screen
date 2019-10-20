import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ScreenThree from "./Navigation/ScreenThree/ScnreeThree";
import Design from "./LoginScreen/design";
import ScreenFour from "./Navigation/ScreenThree/ScreenFour";
import ScreenFive from "./Navigation/ScreenThree/ScreenFive";

const LoginStack = createStackNavigator(
  {
    //first Object takes screens
    DesignScreen: Design,
    ScreenThree: ScreenThree,
    ScreenFour: ScreenFour,
    ScreenFive: ScreenFive
  },
  {
    initialRouteName: "DesignScreen",
    mode: "modal"
  }
);

const AppNavigator = createAppContainer(LoginStack);
export default AppNavigator;
