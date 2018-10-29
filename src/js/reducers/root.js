import { combineReducers } from 'redux';
import movies from './movies';
import seance from './seance';

export default combineReducers({
	movies,
	seance,
});