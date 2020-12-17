import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default ({ navigation }) => {
    useEffect(() => {
        navigation.navigate('Login');
    });
    return (
        <View style={{ marginTop: 24 }}><Text>Loading Page</Text></View>
    );
};