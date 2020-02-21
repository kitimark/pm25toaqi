import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Aqi = ({value}) => {
  return (
    <View style={style.box}>
      <Text style={style.text}>AQI: {value}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  box: {
    padding: 16,
    backgroundColor: '#EE3831',
    borderRadius: 10,
  },
  text: {
    color: 'white',
  },
});

export default Aqi;
