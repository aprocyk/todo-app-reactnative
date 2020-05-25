import React, { FC, useState } from 'react';

import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { IState } from '../reducers';
import todoListReducer, { ITodoListReducer } from '../reducers/todoListReducer';

import { ISingleElementList } from '../entities/todoSingleEl';
import { Text, Button } from 'react-native';
import { removeElemTodoList } from '../actions/todoListActions';


const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
`;
const SingleElList = styled.View`
    border: 1px solid black;
    margin: 0 0 20px 0;
`;

type RemoveElem = ReturnType<typeof removeElemTodoList>;

const TodoList: FC<{switchView(formView: boolean)}> = props => {
    const dispatch = useDispatch();
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList);
    const goToForm = () => {
        props.switchView(true);
    }
    

    const deleteElem = (id: number) => {
        dispatch<RemoveElem>(removeElemTodoList(id));
    }
    return (
        <Wrapper>
            {todoListState.todoList.map((elem: ISingleElementList, index: number) =>
                <SingleElList key={index}>
                    <Text>{elem.name}</Text>
                    <Text>{elem.description}</Text>
                    
                    <Button title='Usuń element' onPress={() => deleteElem(elem.id)}/>
                </SingleElList>
            )}
            <Button title='Dodaj nowy' onPress={goToForm} />
        </Wrapper>
    )
};

export default TodoList;