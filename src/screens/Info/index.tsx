import React, { FC, useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import TextLeftImageRight from '../../components/textLeftImageRight';
import Colors from '../../constans/Colors';
const Lorem = styled.Text`
    text-align: justify;
    margin-right: 10px;
    margin-left: 10px;
`;
const ImageStyle = StyleSheet.create({
    margimage: {
        
        margin: 10,
        width: 150,
        height: 150,
        borderRadius: 10,
        
        
    }
});
interface IInfoProps {

}
const Info = ({ navigation }) => {
    
    return (
        <ScrollView>
            <Image
                style={ImageStyle.margimage}

                source={require('../../assets/pepe.png')}
            />
            <Lorem>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consectetur, nobis nesciunt earum facilis esse itaque optio suscipit ullam fuga veniam, eveniet rem hic in aspernatur. 
                Animi doloribus aliquam consequuntur similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Id obcaecati animi consequuntur? Rerum natus officia labore quam, culpa voluptatibus, 
                nam explicabo esse eius minima laudantium accusantium reiciendis mollitia commodi maxime!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium, 
                suscipit officiis corrupti quasi magnam asperiores vitae veniam maxime doloribus dolores vero mollitia distinctio eaque necessitatibus, 
                veritatis nesciunt aspernatur debitis.
            </Lorem>
            <TextLeftImageRight/>
            <Lorem>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consectetur, nobis nesciunt earum facilis esse itaque optio suscipit ullam fuga veniam, eveniet rem hic in aspernatur. 
                Animi doloribus aliquam consequuntur similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Id obcaecati animi consequuntur? Rerum natus officia labore quam, culpa voluptatibus, 
                nam explicabo esse eius minima laudantium accusantium reiciendis mollitia commodi maxime!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium, 
                suscipit officiis corrupti quasi magnam asperiores vitae veniam maxime doloribus dolores vero mollitia distinctio eaque necessitatibus, 
                veritatis nesciunt aspernatur debitis.
            </Lorem>
        </ScrollView>
    );
};
export default Info;