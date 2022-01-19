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
          color="#900"
          style={{marginLeft: '5%'}}
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
      justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ee6e73',
  },
  headerTitle: {
    fontSize: 16,
    color: '#fff',
    marginLeft: '5%',
    alignSelf:'center'
  },
});

//make this component available to the app
export default Header;
