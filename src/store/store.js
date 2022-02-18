import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import productsReducer from './productsReducer/productsReducer'
import authReducer from './authReducer/authReducer'
import userReducer from './userReducer/userReducer'

const rootReducer = combineReducers({
	auth: authReducer,
	products: productsReducer,
	user: userReducer,
})
const store = createStore(rootReducer, composeWithDevTools())
export default store
