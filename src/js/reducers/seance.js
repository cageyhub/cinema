import {
	GET_SEANCE_SUCCESS,
	BOOK_TICKET_SUCCESS,
	CLEAR_MESSAGE_SUCCESS,
	CLEAR_SEANCE_SUCCESS,
} from '../actions/index';

import { createReducer } from './utils';

const initialState = {
	seance: {},
	message: '',
};

const handlers = {
	[GET_SEANCE_SUCCESS]: (state, { payload }) => ({ seance: payload }),
	[BOOK_TICKET_SUCCESS]: (state, { payload }) => ({ message: payload }),
	[CLEAR_MESSAGE_SUCCESS]: (state, { payload }) => ({ message: payload }),
	[CLEAR_SEANCE_SUCCESS]: (state, { payload }) => ({ seance: payload }),
};

export default createReducer(initialState, handlers);