import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');
//chevron-back-circle-sharp
const Header = props => {
  return (
    <View style={styles.container}>
      {props.title === 'Add New User' ? (
        <Icon
          name="chevron-back-circle-sharp"
          size={30}
          color="white"
          style={{marginLeft: '5%',marginTop:'5%'}}
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
    height: height * 0.1,
    width: width,
      justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  headerTitle: {
    fontSize: 16,
    color: '#fff',
    alignSelf:'center',
    marginTop:'5%',
    width:'80%',
    textAlign:'center'

  },
});

//make this component available to the app
export default Header;
