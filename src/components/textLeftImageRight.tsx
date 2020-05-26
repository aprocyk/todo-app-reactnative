import React, { FC } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const LeftText = styled.Text`
    position: relative;
    width: 70%;
    text-align: justify;
  
`;
const ThingyContainer = styled.View`
    margin-right: 10px;
    margin-left: 10px;
`;
// const ImageStyle = styled.Image`
//     position: relative;
//     right: 0;
//     width: 50px;
//     height: 50px;
    
// `;
const ImageStyle = StyleSheet.create({
    margimage: {

        margin: 10,
        width: 100,
        height: 100,
        right: 0,
        position: "absolute"

    }
});

const textLeftImageRight: FC = props => {
    return (
        <ThingyContainer>

            <LeftText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora accusantium quibusdam ea sed nulla ab sint itaque,
                dolorum enim eius quidem, placeat dolores?
                Sint aliquid ab et amet facilis quos.
            </LeftText>
               <Image
                    style={ImageStyle.margimage}
                    source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
                />

        </ThingyContainer>
    )
}

export default textLeftImageRight;