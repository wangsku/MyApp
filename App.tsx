/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react'
import {View} from 'react-native';
// import router from './src/router'
import Login from './src/scene/Login'
// import Home from './src/scene/Home'
// import My from './src/scene/My'
// import Collect from './src/scene/Collect'


export default class App extends Component {
  render() {
    return (
        <View style={{  }}>
          <Login></Login>
          
        </View>
    );
  }
}

