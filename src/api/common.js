const options = {
	credentials: 'include',
};

export const handleResponse = async (response) => {
	const responseJSON = await response.json();
	if (response.ok) return responseJSON;
	return Promise.reject(responseJSON.message);
};

export const makeFetchRequest = async (url, bodyOptions, callback) => {
	const response = await fetch(url, bodyOptions);
	return callback(response);
};

export const createBodyRequest = (method, bodyData) => {
	const body = {
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
		method,
	};
	if (bodyData) body.body = JSON.stringify(bodyData);
	return body;
};

export const createBodyRequestWithCredentials = (method, bodyData) => {
	const bodyRequest = createBodyRequest(method, bodyData);
	bodyRequest.credentials = 'include';
	return bodyRequest;
};

export const makePostRequest = async (url, bodyData, callback) => {
	const bodyRequest = createBodyRequestWithCredentials("POST", bodyData);
	return await makeFetchRequest(url, bodyRequest, callback);
};

export const makeGetRequest = async (url, callback) => await makeFetchRequest(url, options, callback);