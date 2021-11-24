import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Transaction from "./screens/Transaction";
import Search from "./screens/Search";
import TransactionScreen from "./screens/Transaction";

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction : {screen : TransactionScreen},
  Search : {screen : SearchScreen},
});

const AppContainer = createAppContainer(TabNavigator)
