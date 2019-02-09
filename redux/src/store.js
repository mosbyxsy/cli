import {createStore} from 'redux';
import rootReducers from './reducers';
import {devToolsEnhancer} from 'redux-devtools-extension/developmentOnly';

// redux使用工具说明https://github.com/zalmoxisus/redux-devtools-extension
// export default createStore(rootReducers, process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default createStore(rootReducers, devToolsEnhancer());