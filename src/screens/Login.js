import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Style from './style';
import Button from '../Button';
import {SCREEN_NAME} from './navigation/index';
import {useNavigateion} from '@react-navigation/native';
export default props => {
const [Username, setUsername] = useState();
const [Password, setPassword] = useState();
    const goTosreen2 = () => {

        props.navigation.navigate(SCREEN_NAME.ABOUT_ME, {
            user: Username,
            pass: Password,
        });
    };
   
    return (
        <View >
            <Text style={Style.defaultFontSize}>Login</Text>
            <TextInput  placeholder='Username' onChangeText={setUsername}/>
            <TextInput placeholder='Password' secureTextEntry onChangeText={setPassword} />
            <Button onClick={goTosreen2}>Login</Button>
        </View>

    );
};
/*const Box1 = () => {
    return <View style = {styles.box}>
        <Text>Box1</Text>
    </View>
};
const Box2 = () => {
    return <View style = {styles.box}>
        <Text>Box2</Text>
    </View>
};*/
