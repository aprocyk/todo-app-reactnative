import React, { FC } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';
const WelcomeText = styled.Text`
    color: ${Colors.black};
    font-size: 20px;
    margin: 120px 20px;

`;

interface IInfoProps{
    
}
const Info = ({navigation}) => {
    return(
        <View>
            <WelcomeText>To jest Info</WelcomeText>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quam sed ex officia quaerat perspiciatis, nemo quae 
                voluptates debitis quas hic ipsa nisi molestiae sint eos nulla. Expedita, ipsa repellendus.
            </Text>
        </View>
    );
};
export default Info;