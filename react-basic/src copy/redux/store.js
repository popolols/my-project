import { legacy_createStore as createStore, combineReducers } from "redux"
import { countReducer } from './reducers/count'
import { personReducer } from './reducers/person'
const allReducers = combineReducers({ count: countReducer, persons: personReducer })
const store = createStore(allReducers)

export default store