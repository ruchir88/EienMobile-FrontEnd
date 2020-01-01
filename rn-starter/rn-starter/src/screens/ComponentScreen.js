import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentScreen = () => {
    return (
        <View>
            <Text style={styles.text}>This is component screen test </Text>
        </View>
    );
};

const styles = StyleSheet.create({
   text : {
       fontSize : 30
   }
});

export default ComponentScreen;