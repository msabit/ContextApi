//import liraries
import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const FloatingButton = ({onPressProp}) => {
  return (
    <Pressable style={styles.container} onPress={onPressProp}>
      <Text style={{textAlign: 'center', color: '#fff', fontSize: 30, fontWeight:'bold'}}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'skyblue',
    position: 'absolute',
    bottom: 20,

    // right: 10,
  },
});

//make this component available to the app
export default FloatingButton;
