import React from 'react';
import {
	FaLocationArrow, FaClock, FaThumbsUp,
} from 'react-icons/fa';
import oshukaiKarateLogo from '../images/oshukai-karate.png';
import oshukaiKobudoLogo from '../images/oshukai-kobudo.png';

import './style.scss';

const Midsection = () => (
	<div>

		<section className="section is-small">
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

		<section className="section is-medium">
			<div className="container">

				<p class="title">Les Professeurs</p>

				<div className="columns">

					<div className="column is-one-third">

						<div class="card">
							<div class="card-image">
								<figure class="image is-4by3">
								<img src="https://bulma.io/images/placeholders/1280x960.png"/>
								</figure>
							</div>

							<div class="card-content">
								<div class="media">
									<div class="media-left">
										<figure class="image is-48x48">
										<img src={oshukaiKarateLogo}/>
										</figure>
									</div>
									<div class="media-content">
										<p class="title is-4">François Avril</p>
										<p class="subtitle is-6">Karate, Ceinture Noire 3ème Dan</p>
									</div>
									</div>

									<div class="content">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Phasellus nec iaculis mauris.
								</div>
							</div>
						</div>
					</div>

					<div className="column is-one-third">

						<div class="card">
							<div class="card-image">
								<figure class="image is-4by3">
								<img src="https://bulma.io/images/placeholders/1280x960.png"/>
								</figure>
							</div>

							<div class="card-content">
								<div class="media">
									<div class="media-left">
										<figure class="image is-48x48">
										<img src={oshukaiKarateLogo}/>
										</figure>
									</div>
									<div class="media-content">
										<p class="title is-4">Gérard Zamour</p>
										<p class="subtitle is-6">Karate, Ceinture Noire 2ème Dan</p>
									</div>
									</div>

									<div class="content">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Phasellus nec iaculis mauris.
								</div>
							</div>
						</div>
					</div>

					<div className="column is-one-third">

						<div class="card">
							<div class="card-image">
								<figure class="image is-4by3">
								<img src="https://bulma.io/images/placeholders/1280x960.png"/>
								</figure>
							</div>

							<div class="card-content">
								<div class="media">
									<div class="media-left">
										<figure class="image is-48x48">
										<img src={oshukaiKobudoLogo}/>
										</figure>
									</div>
									<div class="media-content">
										<p class="title is-4">Nicolas Gaubert</p>
										<p class="subtitle is-6">Kobudo, Ceinture Noire 4ème Dan</p>
									</div>
									</div>

									<div class="content">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Phasellus nec iaculis mauris.
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>

		</section>
	</div>
);

export default Midsection;
