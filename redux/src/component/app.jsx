import React, {Component} from 'react';
import Child from './child';

export default class App extends Component{
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return <Child/>
    }
}