import { createSwitchNavigator, createAppContainer } from "react-navigation";
//import { HomeScreen, AuthScreen } from "./screens";
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/AuthScreen";

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    Auth: AuthScreen
  },
  {
    initialRouteName: "Auth"
  }
);

export default createAppContainer(AppNavigator);
