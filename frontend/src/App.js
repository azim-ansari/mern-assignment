/** @format */

import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/pages/Login'
import District from './components/pages/District'
import Child from './components/pages/Child'
import State from './components/pages/State'
import Home from './components/pages/Home'

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/district" component={District} />
					<Route exact path="/state" component={State} />
					<Route exact path="/child" component={Child} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
