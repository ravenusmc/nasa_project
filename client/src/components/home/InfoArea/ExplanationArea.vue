<template>
	<div>

		<section>
			<h1 class='center font'>What you'll Find in Each Area</h1>

			<div class='explanation-div'>

				<div>
					<h3 class='font'>People in Space</h3>
				</div>

				<div>
					This page will show the user the astronauts who are in space. 
				</div>

			</div>

			<div class='explanation-div'>

				<div>
					<h3 class='font'>Picture of the Day</h3>
				</div>

				<div>
					This page will show the user the astronauts who are in space. 
				</div>

			</div>

			<div class='explanation-div'>

				<div>
					<h3 class='font'>Mars</h3>
				</div>

				<div>
					This page will show the user the astronauts who are in space. 
				</div>

			</div>

			<div class='explanation-div'>

				<div>
					<h3 class='font'>EVA</h3>
				</div>

				<div>
					This page will show the user the astronauts who are in space. 
				</div>

			</div>

		</section>

	</div>
</template>

<script>
export default {
	name: "ExplanationArea",
}
</script>

<style scoped>

.explanation-div {
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-top: 30px;
	margin-left: 30px;
	margin-right: 30px;
}

</style>