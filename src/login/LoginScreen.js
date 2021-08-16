import React from 'react';
import {View} from 'react-native'
import { Input, Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginComponent from './LoginComponent'
import styles from './LoginStyle';
import AppButton from '../components/Button';

class LoginScreen extends React.Component {

    render() {
        return (
            <SafeAreaView>

            <KeyboardAwareScrollView  resetScrollToCoords = {{x : 0, y: 0}}>

              <View style = {{flex : 1, alignItems : 'center'}}>

              <LoginComponent/>

              <Input
              label = "Mobile"
              containerStyle = {{width: '80%'}}
              inputStyle = {{paddingStart: 10}}
              placeholder = "Enter Mobile"
              keyboardType = 'number-pad'
              leftIcon = {{ type: 'font-awesome', name: 'user' }}
              />

              <Input
              label = "Password"
              containerStyle = {{width: '80%'}}
              inputStyle = {{paddingStart: 10}}
              placeholder = "Enter Password"
              secureTextEntry = {true}
              leftIcon = {{ type: 'font-awesome', name: 'lock' }}
              />

              <Button 
               title = "Login"
               buttonStyle={{width: 290}}/>
               
              </View>

            </KeyboardAwareScrollView>

            </SafeAreaView>
        );
    }

}

export default LoginScreen;
