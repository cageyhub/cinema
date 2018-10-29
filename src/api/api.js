import { makeGetRequest, handleResponse, makePostRequest } from './common';
import config from '../config';

export const getMovies = () => makeGetRequest(`${config.API_URL}/movies`, handleResponse);

export const getSeance = (seanceId) => makeGetRequest(`${config.API_URL}/seance/${seanceId}`, handleResponse);

export const bookTicket = (seanceId, body) => makePostRequest(`${config.API_URL}/seance/${seanceId}`, body, handleResponse);

