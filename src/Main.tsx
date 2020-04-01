import React, { FC } from 'react';
import { SafeAreaView, Platform, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


import Tabs from './components/bottomTabs';

interface IMainProps { }

const Main: FC<IMainProps> = props => {
    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    );
};

export default Main;