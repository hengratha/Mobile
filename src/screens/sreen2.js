import React from 'react';
import { Text, View } from 'react-native';
import Style from './style';
import {SCREEN_NAME} from './navigation/index';
export default () => {
    const goTosreen2 = () => {

        props.navigation.navigate(SCREEN_NAME.HOME, {
            
        });
    };
    return (
    <View>
    <Text style={Style.defaultFontSize}> Aboutme</Text>
    <Text style={Style.defaultFontSize}>Username: {props.route.params.Username}</Text>
    <Text style={Style.defaultFontSize}>Password:{props.route.params.Password}</Text>
    <Button onClick={goTosreen2}>Login</Button>
    </View>
    
    );
};
