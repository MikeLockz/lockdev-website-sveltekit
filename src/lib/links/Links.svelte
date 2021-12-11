<script lang="ts">
</script>

<section>
	<ul>
		<li>
			<a href="https://www.linkedin.com/in/mlockwitz/" title="LinkedIn Mike Lockwitz">LinkedIn</a>
		</li>
		<li><a href="http://github.com/mikelockz" title="Github Mike Lockwitz">GitHub</a></li>
	</ul>

	<ul>
		<li>
			<a href="https://rimble-devcon-demo.netlify.com/" title="DevCon V - Osaka Demo">DevCon Demo</a
			>
		</li>
		<li><a href="https://rimble-storefront.vercel.app/" title="Rimble-UI">Rimble UI</a></li>
	</ul>
</section>

<style lang="scss">
	section {
		background: linear-gradient(rgb(46 44 44 / 92%), rgb(44 40 35 / 85%)),
			#333333 url('/lockdev-bg.jpg') no-repeat center bottom;
		padding: $mobile_section_vertical_gutter;
		@media (min-width: $sm) {
			padding: $desktop_section_vertical_gutter;
		}
	}
	section > * {
		max-width: 1170px;
		margin: 0 auto;
	}
	header {
		margin-bottom: 120px;
	}
	h2 {
		font-size: 18px;
		color: #fff;
		text-align: center;
	}
	header img {
		width: 36px;
		margin-bottom: 6px;
		filter: invert(1);
	}
	ul {
		text-align: center;
		margin: 14px auto;
	}
	li {
		display: inline-block;
		border-right: 1px solid #fff;
		padding-right: 20px;
		margin-right: 14px;
	}
	li:last-of-type {
		border-right: none;
		margin: 0;
		padding: 0;
	}
	a {
		color: #fff;
		text-decoration: underline;
	}
	a:hover {
		color: #fefefe;
	}
</style>
