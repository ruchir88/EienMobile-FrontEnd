import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);

    return(
      <View>
          <Button
              title={"Add a Color"}
              onPress={()=>{
                  setColors([...colors,getRandomRGB()]); // This will re-run the ColorScreen() component
              }}
          />
          <FlatList
              keyExtractor={(i) => i} // here we don't need destructuring since each 'i' here is each element of colors array as it is. we can use any variable name like i, item, ele, itr etc.
              data={colors} // provide the array object as data provider here. here 'colors' is the array object
              renderItem={({item})=>{ // here item is destructure since here if we pass element without destructuring this is what we get - { index:0, item:'rgb(3,89,6)', separator:{....} }
                  return(
                      <View style={{height: 100, width: 100, backgroundColor: item}}></View>
                  );
              }}
          />
      </View>
    );
};

const getRandomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
});

export default ColorScreen;