import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MoviesPage from './js/screens/MoviesPage/MoviesPage';
import SeancePage from './js/screens/SeancePage/SeancePage';
import NotFound from './js/screens/NotFound/NotFound';
import store from './store';

const App = () => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/" exact component={MoviesPage} />
				<Route path="/seance/:id" component={SeancePage} />
				<Route path="/*" component={NotFound} />
			</Switch>
		</Router>
	</Provider>
);

export default App;
