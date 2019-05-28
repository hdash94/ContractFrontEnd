import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className = "ui inverted segment">
		<div className = "ui inverted secondary pointing menu">
			<a href = '/' className = "active item">
				<h2>Built with React</h2>
			</a>
			<div className = "right menu">
				<a href = '/' className = "ui item"><h4>About</h4></a>
				<a href = '/' className = "ui item"><h4>Account</h4></a>
			</div>
		</div>
		</div>
	);
}
export default Navbar;