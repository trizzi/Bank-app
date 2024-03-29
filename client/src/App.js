import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import AuthState from './context/auth/AuthState';
import Register from './context/auth/Register';
import Login from './context/auth/Login';
import AlertState from './context/alert/AlertState';
import Alerts from './components/layouts/Alerts';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<AlertState>
				<Router>
					<Fragment>
						<Navbar />
						<div className='container'>
							<Alerts />
							<Switch>
								<PrivateRoute
									exact
									path='/'
									component={Home}
								/>
								<Route
									exact
									path='/about'
									component={About}
								/>
								<Route
									exact
									path='/register'
									component={Register}
								/>
								<Route
									exact
									path='/login'
									component={Login}
								/>
							</Switch>
						</div>
					</Fragment>
				</Router>
			</AlertState>
		</AuthState>
	);
};

export default App;
