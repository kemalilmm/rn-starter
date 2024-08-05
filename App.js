import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/componentScreen";
import ListScreen from "./src/screens/ListScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    ListScreens : ListScreen
  },
  {
    initialRouteName: "ListScreens",
    defaultNavigationOptions: {
      title: "Starting Apps",
      headerTitleAlign:"center"
    },
  }
);

export default createAppContainer(navigator);
