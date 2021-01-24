import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    // first screen to show
    initialRouteName: "Search",
    defaultNavigationOptions: {
      // title text on top
      title: "Business Search",
    },
  }
);

// Anything that we export will be taken from React Native
export default createAppContainer(navigator);
