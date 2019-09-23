import React from 'react';
import {
	FaLocationArrow, FaClock, FaThumbsUp,
} from 'react-icons/fa';
import './style.scss';

const Access = () => (
    <div>

        <section className="section">
			<div className="container content">

				<p className="title">Bienvenue sur le site d'Oshukai Paris</p>

				<p>
                    Oshukai Paris est un club de Karaté Shorin Ryu
                    et de Kobudo traditionel d'Okinawa.
                </p>

			</div>

			<div className="container">

				<div className="columns is-variable is-8">

					<div className="column">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaLocationArrow size="fa-2x"/>
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Où nous trouver</h1>
									<p className="subtitle is-size-5">
										3 Villa d'Orléans,<br/>
										75014 Paris.
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="column">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaClock size="fa-2x"/>
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Les horaires</h1>
									<p className="subtitle is-size-5">
										Karaté:
										<ul>
											<li>Mardi, de 19h à 20h30</li>
											<li>Jeudi de 20h30 à 22h.</li>
										</ul>

										Kobudo:
										<ul>
											<li>Jeudi de 19h à 20h30.</li>
										</ul>
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="column">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaThumbsUp size="fa-2x" />
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

export default Access;
