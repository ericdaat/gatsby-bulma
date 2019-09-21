import React from 'react';

import './style.scss';

import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<div className="media-content">
						<div className="content">
							<p className="title is-uppercase is-size-1 has-text-white">
								Oshukai Paris
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
