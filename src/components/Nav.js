import { NavLink } from 'react-router-dom';

function Nav() {
	return (
		<nav className="mt-3">
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<NavLink to="/" exact className="nav-link" activeClassName="active">
						GPAx Calculator
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/TScoreContainer" className="nav-link" activeClassName="active">
						T Score Calculator
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
