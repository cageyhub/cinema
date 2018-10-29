import {
	getSeance as getSeanceApi,
	bookTicket as bookTicketApi,
} from '../../api/api';

import {
	GET_SEANCE_START,
	GET_SEANCE_SUCCESS,
	GET_SEANCE_FAILURE,
	BOOK_TICKET_START,
	BOOK_TICKET_SUCCESS,
	BOOK_TICKET_FAILURE,
	CLEAR_MESSAGE_START,
	CLEAR_MESSAGE_SUCCESS,
	CLEAR_MESSAGE_FAILURE,
	CLEAR_SEANCE_START,
	CLEAR_SEANCE_SUCCESS,
	CLEAR_SEANCE_FAILURE,
} from './index';

export const getSeance = (seanceId) => async (dispatch) => {
	dispatch({ type: GET_SEANCE_START });
	try {
		const seance = await getSeanceApi(seanceId);
		dispatch({
			type: GET_SEANCE_SUCCESS,
			payload: seance,
		});
		return seance;
	} catch (error) {
		dispatch({
			type: GET_SEANCE_FAILURE,
			payload: error,
		});
	}
};

export const bookTicket = (seanceId, body) => async (dispatch) => {
	dispatch({ type: BOOK_TICKET_START });
	try {
		const message = 'Mісця заброньовані!'; // await bookTicketApi(seanceId, body);
		dispatch({
			type: BOOK_TICKET_SUCCESS,
			payload: message,
		});
		return message;
	} catch (error) {
		dispatch({
			type: BOOK_TICKET_FAILURE,
			payload: error,
		});
	}
};

export const clearMessage = () => async (dispatch) => {
	dispatch({ type: CLEAR_MESSAGE_START });
	try {
		const message = '';
		dispatch({
			type: CLEAR_MESSAGE_SUCCESS,
			payload: message,
		});
		return message;
	} catch (error) {
		dispatch({
			type: CLEAR_MESSAGE_FAILURE,
			payload: error,
		});
	}
};

export const clearSeance = () => async (dispatch) => {
	dispatch({ type: CLEAR_SEANCE_START });
	try {
		const seance = {};
		dispatch({
			type: CLEAR_SEANCE_SUCCESS,
			payload: seance,
		});
		return seance;
	} catch (error) {
		dispatch({
			type: CLEAR_SEANCE_FAILURE,
			payload: error,
		});
	}
};