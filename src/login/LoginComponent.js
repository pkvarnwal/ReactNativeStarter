import React from 'react';
import {View, Image} from 'react-native';
import styles from './LoginStyle';

const LoginComponent = () => {
    return (
        <View style = {styles.header}>
             <Image style = {styles.appLogoStyle}
              source = {require('../../assets/app_logo.png')}
              />
        </View>
    )
}


export default LoginComponent;