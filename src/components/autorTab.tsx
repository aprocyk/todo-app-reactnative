import React, { FC } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const AutorText = styled.Text`
    position: relative;
    margin-left: 20%;
    
    
    
`;
const AutorContainer = styled.View`
    margin: 10px;
    margin-bottom: 10px;
    border: 1px gray solid;
    
    border-radius: 15px;
    

    
`;
const TextContainer = styled.View`
  
    
`;
const ImageStyle = StyleSheet.create({
    margimage: {
        
        margin: 10,
        width: 50,
        height: 50,
        borderRadius: 50,
        position: "absolute"
        
    }
});

const Autor: FC = () => {
    return (
        <AutorContainer>
            <Image
                style={ImageStyle.margimage}

                source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
            />
            <AutorText>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempora accusantium quibusdam ea sed nulla ab sint itaque,
            dolorum enim eius quidem, placeat dolores?
               Sint aliquid ab et amet facilis quos.
               lor</AutorText>
        </AutorContainer>
    )
}

export default Autor;