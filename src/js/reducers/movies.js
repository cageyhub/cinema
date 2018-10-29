import {
	GET_MOVIES_SUCCESS,
} from '../actions/index';

import { createReducer } from './utils';

const initialState = {
	movies: [],
};

const handlers = {
	[GET_MOVIES_SUCCESS]: (state, { payload }) => ({ movies: payload }),
};

export default createReducer(initialState, handlers);