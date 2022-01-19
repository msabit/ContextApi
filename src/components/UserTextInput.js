import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
const UserTextInput = props => {
  const dummyFunction = () => {
    console.log("I'm Dummy Function from UserTextInput");
  };
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={props.onChange}
      defaultValue=""
      //  autoCompleteType="email"
      //  autoCapitalize="characters"
      //   autoCorrect={true}
      //  value={props.value}
      //    autoFocus={true}
      // caretHidden={true}
      placeholder={props.title}
      placeholderTextColor={'#fff'}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  textInput: {
    width: '75%',
    alignSelf: 'center',
    // flex: 0.07,
    paddingVertical: 20,
    fontSize: 15,
    margin: '5%',
    color:'#fff',
    borderRadius: 3,
    backgroundColor: 'lightblue',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    justifyContent: 'center',
  },
});

//make this component available to the app
export default UserTextInput;
