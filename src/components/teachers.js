import React from 'react';
import oshukaiKarateLogo from '../images/oshukai-karate.png';
import oshukaiKobudoLogo from '../images/oshukai-kobudo.png';

import './style.scss';

const Teachers = () => (
	<div>

		<section className="section">
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
										<p class="subtitle is-6">Karaté, Ceinture Noire 3ème Dan</p>
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
										<p class="subtitle is-6">Karaté, Ceinture Noire 2ème Dan</p>
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

export default Teachers;
