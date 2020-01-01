import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
      <View>
        <Text style={styles.text}>Hi Trishla</Text>
        <Button
            onPress={() => navigation.navigate("Components")}
            title="Go To Component Screen"
        />
        <Button
            onPress={() => navigation.navigate("List")}
            title="Go To List Screen"
        />
        <Button
            onPress={() => navigation.navigate("Image")}
            title="Go To Image Screen"
        />
        <Button
            onPress={() => navigation.navigate("Counter")}
            title="Go To Counter Screen"
        />
        <Button
            onPress={() => navigation.navigate("Color")}
            title="Go To Color Screen"
        />
        <Button
            onPress={() => navigation.navigate("Square")}
            title="Go To Square Screen"
        />
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;