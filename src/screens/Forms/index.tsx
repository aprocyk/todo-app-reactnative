import React, { FC, useState } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

import Form from '../../components/Form';
import TodoList from '../../components/TodoList';

const Forms = ({navigation}) => {
    const [formView, setFormView] = useState<boolean>(false);
    return(
        <ScrollView>
            {formView ? (
                <Form switchView={setFormView}/>
            ) : (
                <TodoList switchView={setFormView}/>
            )}
            
        </ScrollView>
    );
};
export default Forms;