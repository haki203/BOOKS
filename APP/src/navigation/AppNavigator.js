import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContext } from './AppContext';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Book from '../screens/Book';
import Profile from '../screens/Profile';
import HomeDetails from '../screens/HomeDetails';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';
import Notifications from '../screens/Notifications';
import ChangePass from '../screens/ChangePass';
import ForgetPass from '../screens/ForgetPass';
import OTPValidate from '../screens/OTPValidate';
import Privacy from '../screens/Privacy';
import ChangeProfile from '../screens/ChangeProfile';
import Setting from '../screens/Setting';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Users = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name='ForgetPass' component={ForgetPass} />
      <Stack.Screen name='ChangePass' component={ChangePass} />
      <Stack.Screen name='OTPValidate' component={OTPValidate} />

    </Stack.Navigator>
  )
}

const Mains = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='HomeDetails' component={HomeDetails} />
      <Stack.Screen name='ChangePass' component={ChangePass} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="ChangeProfile" component={ChangeProfile} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>

  )
}

const News = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle:({fontSize:0}),
        tabBarStyle:({height:45}),
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Mains') {
            return <Image style={styles.iconTab} source={require('../assets/image/home-color.png')} />
          } else if (route.name === 'Notifications') {
            return <Image style={styles.iconTab} source={require('../assets/image/notification-color.png')} />
          }
          else if (route.name === 'Book') {
            return <Image style={styles.iconTab} source={require('../assets/image/favourite-color.png')} />
          }
          else if (route.name === 'Profile') {
            return <Image style={styles.iconTab} source={require('../assets/image/man.png')} />
          }

          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
      <Tab.Screen name="Mains" component={Mains} ></Tab.Screen>
      <Tab.Screen name="Notifications" component={Notifications} ></Tab.Screen>
      <Tab.Screen name="Book" component={Book} ></Tab.Screen>
      <Tab.Screen name="Profile" component={Profile} ></Tab.Screen>
      
  </Tab.Navigator>

  )

}
const AppNavigator = () => {
  const { isLogin } = useContext(AppContext);

  return (
    <>
      {isLogin == false ? <Users /> : <News />}
    </>

  )
}

export default AppNavigator

const styles = StyleSheet.create({
  iconTab:{width:30,height:29}
})