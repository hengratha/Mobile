import React from 'react';
import { Text, View } from 'react-native';
import Style from './style';
import Button from '../Button';
import { SCREEN_NAME } from './navigation/index';
import props from './../Button';
export default props => {

    const goTologin = () => {

        props.navigation.navigate(SCREEN_NAME.LOGIN);

    };

    return (
        <View>
            <Text style={Style.defaultFontSize}>Home</Text>
            <Button onClick={goTologin}>Enter</Button>
        </View>

    );
};