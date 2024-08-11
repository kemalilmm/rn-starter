import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/componentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/imageScreen";
import CounterScreen from "./src/screens/counterScreen";
import ColorScreen from "./src/screens/colorScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    ListScreens : ListScreen,
    ImageScreens : ImageScreen,
    CounterScreen : CounterScreen,
    ColorScreen:ColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Starting Apps",
      headerTitleAlign:"center"
    },
  }
);

export default createAppContainer(navigator);
