import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppContext} from './src/context/context';
import UserList from './src/UI/UserList';
import AddUser from './src/UI/AddUser';
const Stack = createStackNavigator();
const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Muhammad Sabit',
      cgpa: 3.25,
      city: 'Islamabad',
    },
    {
      id: 2,
      name: 'Aamir Nawaz',
      cgpa: 3.96,
      city: 'Rawalpindi',
    },
    
  ]);
  const myFun = () => {
    console.log('Hello');
    alert('Hello');
  };
  const myFun1 = obj => {
    //[
    users.push(obj);
    console.log(users[users.length - 1]);
    console.log(users);
    // console.log(users);
  };
  return (
    <AppContext.Provider
      value={{
        users: users,
        myFun: myFun,
        myFun1: myFun1,
      }}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName= "UserList">
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="AddUser" component={AddUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
