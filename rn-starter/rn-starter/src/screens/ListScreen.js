import React from 'react'
import { Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        {name : "Friend #1", age: 20},
        {name : "Friend #2", age: 21},
        {name : "Friend #3", age: 22},
        {name : "Friend #4", age: 23},
        {name : "Friend #5", age: 24},
        {name : "Friend #6", age: 25},
        {name : "Friend #7", age: 26},
        {name : "Friend #8", age: 27}
    ];

    return <FlatList
        keyExtractor={friend => friend.name}
        data={friends} // data props basically denotes that we are having our data source here from friends array declared above.
        renderItem={({item}) => { // renderItem is to render each element in data props as an element in the list -- we do {({ item })} so that we grab the item property directly from the element -- usually we would do {(element)} to grab each element but then that element would have extra properties like index etc. we just need the item property of element
            return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>;
        }}
    />
};

const styles = StyleSheet.create({
    textStyle : {
        marginTop:20
    }
});

export default ListScreen;