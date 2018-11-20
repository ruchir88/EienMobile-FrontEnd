import React from 'react';
import {View, Text} from 'react-native';
import Card from './Card'
import CardSection from './CardSection';

// create component
const StaffingDetail = (props) => {
    return (
      <Card>
          <CardSection>
              <Text>{props.staffing_item.title}</Text>
          </CardSection>
      </Card>
    );
};

// make StaffingDetail component available to other parts in the app
export default StaffingDetail;