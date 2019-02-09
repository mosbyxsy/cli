import todoListConst from '../constant/todoListConst';

function addItem(item) {
    return {
        type: todoListConst.ADD_ITEM,
        payload: {
            todoList: item
        }
    }
}

function delItem(id) {
    return {
        type: todoListConst.DEL_ITEM,
        payload: {
            id
        }
    }
}

export default {
    addItem,
    delItem
}