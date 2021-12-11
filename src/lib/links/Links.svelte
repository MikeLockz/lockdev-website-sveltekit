<script lang="ts">
</script>

<section>
	<ul>
		<li>
			<a href="https://www.linkedin.com/in/mlockwitz/" title="LinkedIn Mike Lockwitz">LinkedIn</a>
		</li>
		<li><a href="http://github.com/mikelockz" title="Github Mike Lockwitz">GitHub</a></li>
	</ul>
</section>

<style lang="scss">
	section {
		background: #333333 url('./lockdev-bg.jpg') no-repeat center bottom;
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
		font-size: 15px;
		color: #fff;
	}
	header img {
		width: 36px;
		margin-bottom: 6px;
		filter: invert(1);
	}
	ul {
		text-align: center;
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
	}
	a:hover {
		text-decoration: underline;
	}
</style>
