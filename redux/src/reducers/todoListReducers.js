import todoListConst from '../constant/todoListConst';

const initState = {
    todoList: []
};

export default function (state = initState, action) {
    switch (action.type) {
        case todoListConst.ADD_ITEM: return {
            ...state,
            todoList: [...state.todoList, action.payload.todoList]
        }
        case todoListConst.DEL_ITEM: return {
            ...state,
            todoList: state.todoList.filter(item => item.id !== action.payload.id)
        }
        default: return state;
    }
}