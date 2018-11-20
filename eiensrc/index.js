/** @format */

import React from 'react';
import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
import Header from './src/components/Header'
import StaffingList from './src/components/StaffingList'

const App = () => {
    return (
        <View>
            <Header headerText={'Eien'}/>
            <StaffingList/>
        </View>
    );
};

AppRegistry.registerComponent(appName, () => App);