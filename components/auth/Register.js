import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
// import firebase from 'firebase/compat/app'
// // import { auth } from './firebase-config';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase-config';
import { createUserWithEmailAndPassword } from '@firebase/auth';
export class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            name: '',
        };
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){
        const {email, name, password} = this.state;
        createUserWithEmailAndPassword(auth, email, password)
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
                    placeholder="name"
                    onChangeText={ (name)=>{
                        this.setState({name})
                    } }
                />
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
                        this.onSignUp()
                    }}
                    title="Sign UP"
                />
            </View>
        )
  }
}

export default Register