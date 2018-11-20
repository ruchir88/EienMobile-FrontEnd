// import libraries for making the component
import React, { Component } from 'react';
import { View } from 'react-native';
import StaffingDetail from './StaffingDetail';

// create component - have class here since this is a detailed component
class StaffingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffing_list: []
        };
    }

    componentWillMount(){
        fetch('https://api.myjson.com/bins/165rdu')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({staffing_list: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderStaffingList() {
       return this.state.staffing_list.map(staffing_item =>
           <StaffingDetail key={staffing_item.id} staffing_item={staffing_item} />
       );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderStaffingList()}
            </View>
        );
    }
}

// Make StaffingList Component available to other parts of the app
export default StaffingList;