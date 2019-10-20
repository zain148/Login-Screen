import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Navigation1 from "./Navigator1";
import Navigation2 from "./Navigator2";

const Screen = createStackNavigator(
  //first object contains Screens
  {
    Screen1: Navigation1,
    Screen2: Navigation2
  },

  //Second object contains Setting of all screen by default
  {
    initialRouteName: "Screen1",
    mode: "modal"
  }
);

const ScreenData = createAppContainer(Screen);
export default ScreenData;
