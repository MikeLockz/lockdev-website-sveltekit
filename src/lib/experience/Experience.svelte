<script lang="ts">
</script>

<section>
	<header class="flex flex-col justify-center items-center">
		<img src="icons/checklist.svg" alt="checklist" />
		<h2 class="uppercase font-extrabold">Experience</h2>
	</header>

	<div class="experiences">
		<div class="overview">
			<p class="intro">A limited overview of current skills and past experience</p>

			<h3>Knowledge, skills, hobbies</h3>

			<ul>
				<li>Process: Agile | Waterfall | Human Centered Design</li>
				<li>Methods: Kanban | Scrum | Design Sprints | User Studies | Focus Groups</li>
				<li>Front: React | HTML | CSS | JS | AngularJS | WordPress</li>
				<li>Back: Rails | .Net | Node</li>
				<li>Ops: Docker | Docker-Compose | Swarm</li>
				<li>Extracurriculars: Refresh Denver | Coder Dojo Denver | Hackathons</li>
			</ul>
		</div>

		<div class="business">
			<h3>Business</h3>

			<div>
				<div class="experience">
					<h4>LockDev Ltd.</h4>
					<h5>Owner since 2012</h5>
					<p>Consult, build, and implement solutions for varied small and medium businesses.</p>
				</div>
				<div class="experience">
					<h4>Flourish Systems</h4>
					<h5>Front End Architect from 2016 until 2020</h5>
					<p>
						Develop and enhance secure web interface for industrial irrigation management system.
					</p>
				</div>
				<div class="experience">
					<h4>Craft Boom</h4>
					<h5>Co-founded in 2012 and developer until 2014</h5>
					<p>
						Built and maintained web, iOS, and Android end-user applications for discovering craft
						consumables.
					</p>
				</div>
				<div class="experience">
					<h4>OpenBike</h4>
					<h5>Founded in 2012 and evangelist until 2014</h5>
					<p>
						Crowdsourced cyclist usage data to deliver better bike routes for the casual but
						interested.
					</p>
				</div>
			</div>
		</div>

		<div class="employment">
			<h3>Employment</h3>

			<div>
				<div class="experience">
					<h4>DispatchHealth</h4>
					<h5>Engineering Manager</h5>
					<p>
						Enhance team health and deliver cross-domain solutions for remote software development
						team.
					</p>

					<h5>Team Lead</h5>
					<p>Manage feature delivery and technical outcomes for the partner team.</p>

					<h5>Senior Front End Engineer</h5>
					<p>
						Build partner web apps to create and manage care requests integrated with electronic
						health records.
					</p>
				</div>

				<div class="experience">
					<h4>Front End Developer @ Consensys</h4>
					<h5>Remote 2019 until 2020</h5>
					<p>
						Launch open-source design system, research and advocate for user experience best
						practices.
					</p>
				</div>

				<div class="experience">
					<h4>Influence Technologies</h4>
					<h5>Technical Business Analyst</h5>
					<p>
						Continuously align business outcomes with technical capabilities to deliver products.
					</p>
					<h5>Senior Web Developer</h5>
					<p>Deliver web apps for Fortune 200 companies with 1+ million annual visits.</p>
				</div>

				<div class="experience">
					<h4>Developer @ Big Container Media</h4>
					<h5>In Denver from 2011 until 2012</h5>
					<p>Design, deliver, and maintain digital marketing packages for clients.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		background-color: $soft_bg;
		padding: $mobile_section_vertical_gutter $mobile_gutter;

		@media (min-width: $sm) {
			padding: $desktop_section_vertical_gutter 0;
		}
	}
	section > * {
		max-width: 1170px;
		margin: 0 auto;
	}
	header {
		margin-bottom: $mobile_section_vertical_gutter;

		@media (min-width: $sm) {
			margin-bottom: $desktop_section_vertical_gutter;
		}
	}
	h2 {
		font-size: 15px;
	}
	header img {
		width: 36px;
		transform: rotate(90deg);
		margin-bottom: 6px;
	}
	.experiences {
		@media (min-width: $sm) {
			display: flex;
		}
		& > div {
			margin: 0 40px;
		}
	}
	.overview {
		flex: 2 1 auto;
	}
	.business,
	.emloyment {
		flex: 1 1 auto;
	}
	.intro {
		font-family: 'Playfair Display', serif;
		margin-top: 0;
		margin-bottom: 60px;
		font-weight: 500;
		font-size: 45px;
		line-height: 55px;
		letter-spacing: 2px;
		@media (min-width: $sm) {
			text-align: right;
		}
	}
	h3 {
		text-transform: uppercase;
		font-size: 14px;
		font-weight: 600;
		margin-top: 5px;
		margin-bottom: 20px;
		color: #777;
	}
	ul {
		padding: 0 0 0 18 px;
		margin-top: 0;
		margin-bottom: 10 px;
		display: block;
		list-style-type: disc;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		padding-inline-start: 40px;
	}
	li {
		padding: 8px 0;
		line-height: 1.4em;
	}
	h4 {
		font-size: 14px;
		letter-spacing: 1px;
		font-weight: 700;
		margin-bottom: 2px;
	}
	h5 {
		font-style: italic;
		font-size: 14px;
		margin-bottom: 4px;
		color: #606060;
	}
	.experience {
		margin-bottom: 16px;
	}
	.experience p {
		line-height: 25px;
		letter-spacing: 1px;
		font-size: 13px;
		color: #888;
		margin-bottom: 8px;
	}
</style>
