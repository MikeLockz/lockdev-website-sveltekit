<script lang="ts">
</script>

<section>
	<div class="about-header flex flex-col justify-center items-center">
		<img src="icons/postcard.svg" alt="postcard" />
		<h2 class="uppercase font-extrabold">About</h2>
	</div>

	<div class="about-content">
		<p class="intro font-serif">
			I'm Mike, a developer working as a manager, focused on delivering value
		</p>

		<div class="content">
			<p>
				Throughout my career as a web technologists so many things have changed. There are new
				devices, software, and expectations that drive innovation.
			</p>

			<p>
				Even with all the change there are constants. Thoughtful, thorough, and empathetic analysis
				of issues still solves problems.
			</p>

			<p>
				With LockDev Ltd. you get an experienced practitioner of front-end code balanced with an
				analytical approach to problem-solving and practiced project management skills.
			</p>

			<p>
				Solution engagements come in varying scope and length but never compromise on quality. The
				end result is value.
			</p>
		</div>
	</div>

	<ul class="flex">
		<li>
			<img src="icons/window_full.svg" alt="window full of text and images" />
			<caption>Front-End Developer</caption>
		</li>

		<li>
			<img src="icons/compass.svg" alt="compass" />
			<caption>Product owner</caption>
		</li>

		<li>
			<img src="icons/watch.svg" alt="watch" />
			<caption>Project Manager</caption>
		</li>

		<li>
			<img src="icons/airplane.svg" alt="airplane" />
			<caption>Mentor</caption>
		</li>

		<li>
			<img src="icons/mic.svg" alt="mic" />
			<caption>Organizer</caption>
		</li>

		<li>
			<img src="icons/trophy.svg" alt="trophy" />
			<caption>Hackathoner</caption>
		</li>
	</ul>
</section>

<style lang="scss">
	section {
		margin: 40px auto 80px;
		padding: $mobile_section_vertical_gutter $mobile_gutter;

		@media (min-width: $sm) {
			max-width: 1170px;
			margin: $desktop_section_vertical_gutter auto;
		}
	}
	.about-header {
		margin: 0 0 $mobile_section_vertical_gutter;

		@media (min-width: $sm) {
			margin: 0 0 $desktop_section_vertical_gutter;
		}
	}
	h2 {
		font-size: 15px;
	}
	.about-header img {
		width: 36px;
	}

	.about-content {
		@media (min-width: $sm) {
			display: flex;
			justify-content: space-between;
		}
	}

	.about-content > :first-child {
		@media (min-width: $sm) {
			max-width: 40%;
			margin-right: 60px;
		}
	}
	.about-content > :last-child {
		max-width: auto;
	}

	.intro {
		font-weight: 500;
		font-size: 45px;
		line-height: 55px;
		color: #222;
		margin-bottom: 40px;
		@media (min-width: $sm) {
			text-align: right;
		}
	}

	.content {
		@media (min-width: $sm) {
			columns: 2;
			column-gap: 24px;
		}
	}
	.content p {
		line-height: 32px;
		letter-spacing: 1px;
		font-size: 16px;
		color: #888;
		text-align: left;
		margin-bottom: 10px;
	}

	caption {
		font-size: 12px;
		font-weight: 600;
		letter-spacing: 1px;
		text-transform: uppercase;
	}

	ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 80px;

		@media (min-width: $sm) {
			flex-wrap: nowrap;
		}
	}

	li {
		text-align: center;
		text-transform: uppercase;
	}
	li > img {
		display: inline-block;
		margin-bottom: 16px;
	}
</style>
