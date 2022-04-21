import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import { auth } from './firebase-config';
import { signInWithEmailAndPassword } from '@firebase/auth';
export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
        };
        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn(){
        const {email, password} = this.state;
        signInWithEmailAndPassword(auth, email, password)
    .then((re) => {
        console.log(re)
        
  })
  .catch((error) => {
   console.log(error)
  });
    }

    render() {
        return (
            <View style={{flex:1,justifyContent:'center'}}>
                <TextInput
                    placeholder="email"
                    onChangeText={ (email)=>{
                        this.setState({email})
                    } }
                />
                <TextInput
                    placeholder="password"
                    onChangeText={ (password)=>{
                        this.setState({password})
                    } }
                    secureTextEntry={true}
                />
                <Button
                    onPress={()=>{
                        this.onSignIn()
                    }}
                    title="Sign In"
                />
            </View>
        )
  }
}

export default Login