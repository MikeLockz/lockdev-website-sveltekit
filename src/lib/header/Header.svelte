<script lang="ts">
</script>

<header class="text-center">
	<div>
		<h1 class="font-serif">Remote doesn't mean alone</h1>
		<h2>LockDev Ltd.</h2>
	</div>
</header>

<style lang="scss">
	header {
		background: #333333 url('lockdev-bg.jpg') no-repeat center top;
		background-size: cover;
		min-height: 100vh;

		@media (min-width: $sm) {
			height: 1040px;
		}
	}

	header > div {
		max-width: 900px;
		text-align: center;
		margin: 0 auto;
		padding: 100px 20px 0;

		@media (min-width: $sm) {
			padding-top: 180px;
		}
	}
	h1 {
		font-size: 40px;
		letter-spacing: 1px;
		font-weight: 800;
		line-height: 36px;
		color: rgba(0, 0, 0, 0.72);
		@media (min-width: $sm) {
			font-size: 95px;
			letter-spacing: 2px;
			line-height: 95px;
		}
	}
	h2 {
		text-transform: uppercase;
		font-size: 18px;
		font-weight: 400;
		margin-top: 10px;
	}
</style>
