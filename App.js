import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import PeoplePage from "./src/pages/PeoplePage";

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: PeoplePage
    }
  },
  {
    defaultNavigationOptions: {
      title: "Pessoas!",
      headerStyle: {
        backgroundColor: "#6ca2f7",
        borderBottomWidth: 1,
        borderBottomColor: "#C5C5C5"
      },
      headerTitleStyle: {
        color: "white",
        fontSize: 30,
        flexGrow: 1,
        textAlign: "center"
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
