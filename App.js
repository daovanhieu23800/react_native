import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import  Landing  from './components/auth/Landing'
// import Register from './components/auth/Register';
// import Login from './components/auth/Login';
import { Button, Text, View } from 'react-native';
import React, { Component } from 'react'
// import { auth } from './components/auth/firebase-config';
// import { onAuthStateChanged,signOut } from "firebase/auth";


// import {Dashboard} from './components/Screens/Dashboard'
// import {Settings} from './components/Screens/Settings'
import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';
import Gas from './screens/Gas'

const Stack = createStackNavigator()


export class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       loaded: false,
//       // isLogIn: false,
//     }
//   }
//   componentDidMount(){
//     onAuthStateChanged(auth,(user)=>
//     {
//       if (user) 
//       {
//         this.setState
//         ({
//           loaded: true,
//           isLogIn: true,
//         })
//       } else 
//       {
//         this.setState
//         ({
//           loaded: true,
//           isLogIn: false,
        
//         })
//       }
//     })
//   }

//   render() {
//     const {isLogIn, loaded} = this.state;
//     if (!loaded)
//     {
//       return(
//         <View>
//           <Text>loading.....</Text>
//         </View>
//       )
//     }
//     if (!isLogIn){
//       return (
//         <NavigationContainer>
//         <Stack.Navigator initialRouteName="Landing">
//           <Stack.Screen name="Homepage" component={Landing} options={{headerShown:false}}/>
//           <Stack.Screen name="Register" component={Register} />
//           <Stack.Screen name="Login" component={Login} />
          
//         </Stack.Navigator>
//       </NavigationContainer>
//       )
//     }
//     else{
    render() {
      return(
       
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Gas" component={Gas} />

            </Stack.Navigator>
        </NavigationContainer>

         
      )
//     }
  }
}

export default App

