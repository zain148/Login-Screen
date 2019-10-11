//import FlatListcomp from "./Folder/FlatList/FlatList";
//Navigations
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ScreenOne from "./Folder/Navigation/ScreenOne";
import ScreenTwo from "./Folder/Navigation/ScreenTwo";

//here App.js is our Main File
const Apps = createStackNavigator(
  {
    //first Object takes screens
    Home: ScreenOne,
    Home2: ScreenTwo
  },
  {
    initialRouteName: "Home",
    mode: "card"
  }
);

export default createAppContainer(Apps);
