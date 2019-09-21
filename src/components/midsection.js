import React from 'react';
import {
	FaLocationArrow, FaClock, FaThumbsUp,
} from 'react-icons/fa';

import './style.scss';

const Midsection = () => (
	<div>
		<section className="section">

			<div className="container content">
				<p class="title">Qui Sommes Nous?</p>

				<p>
					Oshukai Paris est un club de Karaté Shorin Ryu
					et de Kobudo traditionel d'Okinawa.
				</p>

			</div>

			<div className="container">

				<div className="columns">

					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaLocationArrow size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Où nous trouver</h1>
									<p className="subtitle is-size-5">
										Nous sommes à Paris 14.
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaClock size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Les horaires</h1>
									<p className="subtitle is-size-5">
										Mardi, de 19h à 20h30 et
										Jeudi de 19h à 22h30.
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaThumbsUp size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Cours d'Essai</h1>
									<p className="subtitle is-size-5">
										Venez assister gratuitement à un cours
										d'essai quand vous le souhaitez.
									</p>
								</div>
							</div>
						</article>
					</div>

				</div>
			</div>

		</section>
	</div>
);

export default Midsection;
