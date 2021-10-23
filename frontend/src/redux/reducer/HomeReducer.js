/** @format */

import { SET_USER } from '../ActionType'

const initialState = {}

const HomeReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				loginData: action.payload,
			}
		default:
			return state
	}
}

export default HomeReducer
