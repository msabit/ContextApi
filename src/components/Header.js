import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');
import { hp, wp, fs } from "./CalDimension";
//chevron-back-circle-sharp
const Header = props => {
  return (
    <View style={styles.container}>
      {props.title === 'Add New User' ? (
        <Icon
          name="chevron-back-circle-sharp"
          size={fs(35)}
          color="white"
          style={{marginLeft: wp(5),marginTop:hp(4)}}
          onPress={() => props.navigation.goBack()}
        />
      ) : null}
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp(10),
    width: wp('100%'),
      justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  headerTitle: {
    fontSize: fs(16),
    color: '#fff',
    alignSelf:'center',
    marginTop:hp(4),
    width:wp('80%'),
    textAlign:'center'

  },
});

//make this component available to the app
export default Header;
