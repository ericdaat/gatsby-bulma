import React from 'react';

import './style.scss';
import oshukaiLogo from '../images/oshukai-karate-kobudo.png';

const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a
						className="navbar-item"
						href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
					>
						<img src={oshukaiLogo} alt="Logo-1" />
					</a>
				</div>
				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end has-text-black">
						<span className="navbar-item">A Propos</span>
						<span className="navbar-item">Contact</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
