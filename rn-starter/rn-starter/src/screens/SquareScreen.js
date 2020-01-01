import React, {useReducer} from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

// This method is outside because if its inside SquareScreen then both state variables used inside it might be confusing
// reducer takes two arguments, state which is the initial state of the object that needs to be managed and second argument is action which defines how the state
// variable changes.
// action - {colorToChange: 'red', amount: 15}
const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return (state.red + state.amount > 255 || state.red + action.amount < 0) ? state : {...state, red: state.red + action.amount};
        case 'green':
            return (state.green + state.amount > 255 || state.green + action.amount < 0) ? state : {...state, green: state.green + action.amount};
        case 'blue':
            return (state.blue + state.amount > 255 || state.blue + action.amount < 0) ? state : {...state, blue: state.blue + action.amount};
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0}); // dispatch here is analogous to runMyReducer, we have defined reducer here which basically handles the change in state object here.
    // state - {red: 0, green: 0, blue: 0}
    const {red, green, blue} = state; // destructuring state
    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})} // calling the reducer / executing the reducer function by using the dispatch method which is return while using useReducer
                onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
                color={"Red"}
            />
            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
                color={"Green"}
            />
            <ColorCounter
                onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
                color={"Blue"}
            />

            <View style={{
                height: 100,
                width: 100,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
});

export default SquareScreen;