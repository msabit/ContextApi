import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import FloatingButton from '../components/FloatingButton';
import Header from '../components/Header';
import {AppContext} from '../context/context';
const {width, height} = Dimensions.get('window');
import { hp, wp, fs } from "../components/CalDimension";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFocusEffect} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import {useEffect} from 'react/cjs/react.production.min';


const UserList = props => {
  const context = useContext(AppContext);
  const [user, setUser] = useState(context.users);
  const [loader, setLoader] = useState(true);

  const removeFromContext = index => {
    // const hi={context.hy}
    //context.myFun();
    var a = Object.assign([], user);
    a.splice(index, 1);
    setUser(a);
    context.users.splice(index, 1);
    //  console.log(a);
  };
  // const hp = (n)=>{
  //   return (n*height)/100;
  // }
  // const wp=(n)=>{
  //   return (n*width)/100;
  // }
  useEffect(() => {
    setLoader(false);
  }, []);

  useFocusEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  });
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: hp(9),
          alignItems: 'center',
        }}>
        <Text style={styles.flatListTextStyle}>{item.name}</Text>
        <Text style={styles.flatListTextStyle}>{item.cgpa}</Text>
        <Text style={styles.flatListTextStyle}>{item.city}</Text>
        <Icon
          name="delete"
          size={fs(30)}
          color="#000"
          // onPress={() => users.filter(user => user.id != 2)}
          //  onPress={() => users.filter(user => user.id != 2)}

          onPress={() => removeFromContext(index)}
        />
      </View>
    );
  };
  const sep = () => {
    return (
      <View
        style={{
          height: 1,
          width: wp(96),
          alignSelf: 'center',
          backgroundColor: '#fff',
        }}
      />
    );
  };
  if (loader) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={fs(30)} color={'blue'} />
      </View>
    );
  } else
    return (
      <View style={styles.container}>
        <Header title="User List" />

        <View
          style={{
            height:hp(75),
            backgroundColor: 'lightblue',
            marginTop: hp(3),
            //marginBottom: '7%',
          }}>
          <FlatList
            style={{width: wp(90)}}
            data={context.users}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={sep}
            //  extraData={selectedId}
          />
        </View>

        <FloatingButton
          onPressProp={() => {
            setLoader(true);
            props.navigation.navigate('AddUser');
          }}
        />
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  flatListTextStyle: {
    fontSize: fs(15),
    color: '#000',
  },
});

//make this component available to the app
export default UserList;
