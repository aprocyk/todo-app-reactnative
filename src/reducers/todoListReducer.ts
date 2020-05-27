import * as actionTypes from '../actions/types/todolistTypes';
import { ISingleElementList } from '../entities/todoSingleEl';
import TodoList from '../components/TodoList';

export interface ITodoListReducer {
    todoList: ISingleElementList[];
}

const defaultState = (): ITodoListReducer => ({
    todoList: [{
        name: 'Test1',
        description: 'Test descrption',
        id: 1
    },
    {
        name:'Test2',
        description: 'Test description',
        id: 2
    }]
});

export default (state = defaultState(), action: any): ITodoListReducer => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEM: {
            return {
                ...state,
                todoList: [...state.todoList, action.newElem]
            };
        }
        case actionTypes.REMOVE_ELEM: {
            return{
                ...state,
                todoList: state.todoList.filter(element => element.id !== action.id)
            }
            
        }
        default: {
            return state;
        }
    }
};