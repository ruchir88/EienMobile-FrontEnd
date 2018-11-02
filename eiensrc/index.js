/** @format */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Header from './src/components/header'

const App = () => (
    <Header headerText={'Eien'}/>
);

AppRegistry.registerComponent(appName, () => App);
