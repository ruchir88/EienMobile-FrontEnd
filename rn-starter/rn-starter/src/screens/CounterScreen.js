import React, {useReducer} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const reducer = (state, action) => {
    return {...state, count: state.count + action.payload}
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const {count} = state;

    return (
        <View>
            <Button
                onPress={()=>{
                    dispatch({type: 'add', payload: 1});
                }}
                title={"Increase"}
            />
            <Button
                onPress={()=>{
                    dispatch({type: 'subtract', payload: -1});
                }}
                title={"Decrease"}
            />
            <Text>Counter : {count} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default CounterScreen;

/* This is using useState -
import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button
                onPress={()=>{
                    // Don't do this
                    //counter++;
                    setCounter(counter + 1); // Whenever this is called the whole ComponentScreen is executed/rerun again
                }}
                title={"Increase"}
            />
            <Button
                onPress={()=>{
                    // Don't do this
                    //counter--;
                    setCounter(counter - 1);
                }}
                title={"Decrease"}
            />
            <Text>Counter : {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default CounterScreen;
*/