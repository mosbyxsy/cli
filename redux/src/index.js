import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import App from './component/app';
import store from './store';

let root = document.createElement("div");
document.body.appendChild(root);

ReactDom.render(<Provider store={store}><App/></Provider>, root);