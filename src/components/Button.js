import React from 'react';
import { TouchableOpacity} from 'react-native';
import { View, Button} from 'react-native';
import { Button as NewButton} from 'react-native-elements/dist/buttons/Button';

const AppButton = ({width, buttonTitle}) => {
    
    return (
        <View style = {{width: width}}>
          <NewButton  
           title = {buttonTitle}
           buttonStyle={{borderColor: '#ff0000', backgroundColor : 'red'}} 
           TouchableComponent = {TouchableOpacity}/>
        </View>
        
    )
}


export default AppButton;