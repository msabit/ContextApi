import React, {useContext, useState} from 'react';
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../components/Header';
import UserTextInput from '../components/UserTextInput';
import {AppContext} from '../context/context';
// const {width, height} = Dimensions.get('window');
import { hp, wp, fs } from "../components/CalDimension";
const AddUser = ({navigation}) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [cgpa, setCGPA] = useState('');
  const context = useContext(AppContext);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header title="Add New User" navigation={navigation} />
      <ScrollView>
        <UserTextInput
          onChange={val => setName(val)}
          //  value={name}
          title="Your Name"
        />
        <UserTextInput
          onChange={val => setCity(val)}
          //  value={name}
          title="Your City"
        />
        <UserTextInput
          onChange={val => setCGPA(val)}
          // value={name}
          title="Your CGPA"
        />

        <Pressable
          onPress={
            //() => console.log(name + cgpa + city)
            () =>
              context.myFun1(
                {id: '5', name: name, cgpa: cgpa, city: city},
                navigation.goBack(),
              )
          }
          style={styles.AddUserButtonStyle}>
          <Text style={{alignSelf: 'center', color: '#fff'}}>Add User</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    width: wp('75%'),
    alignSelf: 'center',
    flex: 0.07,
    margin: '5%',
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
  AddUserButtonStyle: {
    width: wp('50%'),
    height: hp(7),
    alignSelf: 'center',
    margin: '5%',
    borderRadius: 10,
    backgroundColor: 'skyblue',
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
export default AddUser;
