import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux"

import countReducer from './reducers/count'
import personReducer from "./reducers/person"
import thunk from 'redux-thunk'

// 引入redux-devtools开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'
const allReducers = combineReducers({ count: countReducer, persons: personReducer })
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store