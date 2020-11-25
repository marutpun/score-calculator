import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import GpaContainer from './containers/GpaContainer';
import TScoreContainer from './containers/TScoreContainer';

function App() {
	return (
		<RecoilRoot>
			<Router>
				<ul>
					<li>
						<Link to="/">GPAx Calculator</Link>
					</li>
					<li>
						<Link to="/TScoreContainer">T Score Calculator</Link>
					</li>
				</ul>

				<Switch>
					<Route exact path="/">
						<GpaContainer />
					</Route>
					<Route path="/TScoreContainer">
						<TScoreContainer />
					</Route>
				</Switch>
			</Router>
		</RecoilRoot>
	);
}

export default App;
