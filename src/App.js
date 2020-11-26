import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import GpaContainer from './containers/GpaContainer';
import TScoreContainer from './containers/TScoreContainer';

function App() {
	return (
		<RecoilRoot>
			<Router>
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
