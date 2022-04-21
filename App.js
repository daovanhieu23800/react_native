import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Landing  from './components/auth/Landing'
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { Button, Text, View } from 'react-native';
import React, { Component } from 'react'
import { auth } from './components/auth/firebase-config';
import { onAuthStateChanged,signOut } from "firebase/auth";


const Stack = createStackNavigator()


export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loaded: false,
      // isLogIn: false,
    }
  }
  componentDidMount(){
    onAuthStateChanged(auth,(user)=>
    {
      if (user) 
      {
        this.setState
        ({
          loaded: true,
          isLogIn: true,
        })
      } else 
      {
        this.setState
        ({
          loaded: true,
          isLogIn: false,
        
        })
      }
    })
  }

  render() {
    const {isLogIn, loaded} = this.state;
    if (!loaded)
    {
      return(
        <View>
          <Text>loading.....</Text>
        </View>
      )
    }
    if (!isLogIn){
      return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Homepage" component={Landing} options={{headerShown:false}}/>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
      )
    }
    else{
      return(
        <View>
          <Text>user is logged in</Text>
          <Button
            title="signout"
            onPress={()=>{
              signOut(auth).then(() => {
                alert(this.state.loaded)
                
              }).catch((error) => {
                // An error happened.
              });
            }
          }
          />
        </View>
      )
    }
  }
}

export default App

