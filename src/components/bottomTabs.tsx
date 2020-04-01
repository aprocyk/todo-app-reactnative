import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Welcome from '../screens/Welcome';
import Info from '../screens/Info';
import Forms from '../screens/Forms';
const Tab = createBottomTabNavigator();

const Tabs: FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{ activeTintColor: '#e91e63' }}>
            <Tab.Screen name="Home"
                component={Welcome}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home"
                            color={color} size={size} />
                    )
                }} />
            <Tab.Screen name="Forms" component={Forms}
                options={{
                    tabBarLabel: 'Todo list',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="check-box-multiple-outline"
                            color={color} size={size} />
                    )
                }} />
            <Tab.Screen name="Informations" component={Info}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="information"
                            color={color} size={size} />
                    )
                }} />
        </Tab.Navigator>
    );
}
export default Tabs;