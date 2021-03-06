import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Design from "../LoginScreen/design";
import Navigation1 from "./Navigator1";
import Navigation2 from "./Navigator2";
import Navigator3 from "./Navigator3";

import { createStackNavigator } from "react-navigation-stack";

// use both Stack and tab navigator
const ScreenBottomNavigator = createBottomTabNavigator(
  //first object contains Screens
  {
    Screen1: {
      screen: Navigation1,
      navigationOptions: {
        tabBarOnPress: ({ navigation }) => {
          navigation.navigate("Screen2");
        }
      }
    }
  },

  //Second object contains Setting of all screen by default
  {
    initialRouteName: "Screen1",
    tabBarOptions: {
      activeTintColor: "red",
      activeBackgroundColor: "white",
      tabStyle: {
        backgroundColor: "blue"
      },
      showLabel: true,
      showIcon: true,
      labelStyle: {
        fontSize: 30
      }
    }
  }
);

const stack = createStackNavigator(
  {
    Design: {
      screen: Design
    },
    Screen2: {
      screen: Navigation2
    },
    Screen3: {
      screen: Navigator3
    },
    Screen1: {
      screen: ScreenBottomNavigator
    }
  },
  {
    initialRouteName: "Design"
  }
);

const ScreenData = createAppContainer(stack);
export default ScreenData;
