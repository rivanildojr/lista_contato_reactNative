import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import PeoplePage from "./src/pages/PeoplePage";

const AppNavigator = createStackNavigator({
  Main: {
    screen: PeoplePage
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
