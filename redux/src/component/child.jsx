import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import todoListAction from '../action/todoListAction';

class Child extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            inputValue: ""
        };
    }

    addItem (e) {
        e.preventDefault();
        this.props.addItem({
            id: Math.random(),
            value: this.state.inputValue
        });
        this.setState({
            inputValue: ""
        });
    }

    delItem (id) {
        this.props.delItem(id);
    }

    onChange (e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    render() {
        return (<div>
            <form onSubmit={this.addItem.bind(this)}>
                <input value={this.state.inputValue} onChange={this.onChange.bind(this)}/>
                <button>增加</button>
            </form>
            <ul>
                {
                    this.props.todoList.map(item => {
                        return <li key={item.id} onClick={this.delItem.bind(this, item.id)}>{item.value}</li>
                    })
                }
            </ul>
        </div>)
    }
}

const mapStateToProps = function(state) {
    return {
        todoList: state.todoListReducers.todoList
    };
};

// 以下几种写法都适用
/*const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        addItem: todoListAction.addItem,
        delItem: todoListAction.delItem
    }, dispatch);
};*/

/*const mapDispatchToProps = function (dispatch) {
    return {
        addItem: (...args) => dispatch(todoListAction.addItem(...args)),
        delItem: (...args) => dispatch(todoListAction.delItem(...args)),
    }
};*/

const mapDispatchToProps = {
    addItem: todoListAction.addItem,
    delItem: todoListAction.delItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Child)