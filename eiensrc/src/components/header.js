// import libraries for making the component

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// create component
const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headerTextStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle : {
        backgroundColor: 'rgba(30,144,255,1.0)',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        shadowColor: 'rgba(30,144,255,1.0)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    headerTextStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 30
    }
});

// Make the component available to other parts of the app
export default Header;