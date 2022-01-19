//import liraries
import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const FloatingButton = ({onPressProp}) => {
  return (
    <Pressable style={styles.container} onPress={onPressProp}>
      <Text style={{textAlign: 'center', color: '#fff', fontSize: 16}}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 7,
    // right: 10,
  },
});

//make this component available to the app
export default FloatingButton;
