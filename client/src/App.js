import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layouts/Navbar';

function App() {
	return (
		<Router>
			<>
				<Navbar />
				<div className='container'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/about' component={About} />
					</Switch>
				</div>
			</>
		</Router>
	);
}

export default App;
