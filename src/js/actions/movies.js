import { getMovies as getMoviesApi } from '../../api/api';
import {
	GET_MOVIES_START,
	GET_MOVIES_SUCCESS,
	GET_MOVIES_FAILURE,
} from './index';

export const getMovies = () => async (dispatch) => {
	dispatch({ type: GET_MOVIES_START });
	try {
		const movies = await getMoviesApi();
		dispatch({
			type: GET_MOVIES_SUCCESS,
			payload: movies,
		});
		return movies;
	} catch (error) {
		dispatch({
			type: GET_MOVIES_FAILURE,
			payload: error,
		});
	}
};