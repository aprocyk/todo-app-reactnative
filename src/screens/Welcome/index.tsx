import React, { FC } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components/native';


import Autor from '../../components/autorTab';
import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`
    margin: 50px 50px;
    font-size: 20px;
    color: ${Colors.black};
`;
const ImageStyle = StyleSheet.create({
    margimage: {
        width: 100,
        height: 100,
        marginLeft: 100
    }
});
const TextStyle = StyleSheet.create({
    margtext: {
        marginLeft: 10,
        marginRight: 10,
        textAlign: "justify"
    }
});
interface IWelcomeProps {
    myProps: string;
}

const Welcome: FC<IWelcomeProps> = props => {
    return (

        <ScrollView>

            <WelcomeText>Welcome {props.myProps}</WelcomeText>
            <Autor />
            
            <View>
            <Image
                style={ImageStyle.margimage}
                source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
                />
            <Text style={TextStyle.margtext}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Minus quibusdam voluptas similique dolorem quae vero ad quam ab,
                dignissimos dicta nam culpa officiis perspiciatis,
                dolorum voluptate expedita aperiam excepturi. Deleniti!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat commodi dolor vel qui,
                
                ab voluptate unde quasi nam modi at nulla veritatis voluptatum tenetur rerum?
                Repellat omnis magnam accusamus ut. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id sapiente est, praesentium omnis doloribus sequi veniam quo esse.
                Inventore ipsam error quis dolores exercitationem eveniet amet odio eligendi? Non, magnam.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Possimus mollitia dicta nam expedita obcaecati facere enim eius eligendi. 
                Autem aut blanditiis architecto fugiat molestiae laudantium similique cum animi aliquam dignissimos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Labore sunt inventore, magnam voluptate non nihil cumque quis, 
                molestiae reprehenderit assumenda placeat, soluta quaerat ipsa fuga? 
                Possimus numquam natus praesentium tempore. 
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Eaque assumenda dolorum cum cupiditate veniam quae ad saepe reprehenderit excepturi, 
                quasi fugit ipsa dolorem. 
                Obcaecati, laboriosam necessitatibus incidunt ad voluptatibus nihil. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Blanditiis eius quos eaque nostrum eveniet nihil, 
                unde recusandae vel magni veritatis fugiat consequatur nam temporibus iure sequi minima 
                provident! Aliquam reiciendis architecto voluptatibus molestiae laudantium ullam 
                quo sequi nostrum repellat provident! Reiciendis fugiat cupiditate aperiam a odio 
                vitae nam cum mollitia praesentium. Id, suscipit aliquid facere, voluptas inventore 
                deserunt placeat velit nobis possimus repellendus fugit aliquam nisi. 
                Quod sint excepturi eum commodi ex eius sunt expedita, aspernatur sapiente nemo, 
                at error, voluptas nobis veritatis? Cum nesciunt reiciendis eum! 
                Tenetur nobis quidem placeat nesciunt, sequi explicabo quo minima quis molestiae 
                delectus ducimus!
            </Text>
            </View>
        </ScrollView>
    );
};

export default Welcome;