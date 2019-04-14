import React from 'react';
import {
  Text,
} from 'native-base';

const BoldText = (props) => {
  return (
    <Text style={{fontSize:18, padding:2, fontWeight:'bold'}}>{props.children}</Text>
  );
};
export default BoldText;
