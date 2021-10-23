/** @format */

import { combineReducers } from 'redux'
import HomeReducer from './HomeReducer'

const rootRuducer = combineReducers({
	home: HomeReducer,
})

export default rootRuducer
