<template>
	<div>

		<section>
			<h1 class='center font'>What you'll Find in Each Area</h1>

			<div class='explanation-div'>

				<div>
					<h3 class='font center-title'>People in Space</h3>
				</div>

				<div>
					This page will show the user the astronauts who are in space. I do have to admit that I got the 
					API link from Team Treehouse on one of their projects. I don't believe that the API is updated to 
					the current people in space. 
				</div>

			</div>

			<div class='explanation-div'>

				<div>
					<h3 class='font center-title'>Picture of the Day</h3>
				</div>

				<div>
					<p>
						This page will show the user the 'selected' NASA picture of the day. The picture of the day 
						can be anything from an image of a galaxy, sunset, to a star to even soem videos. It's always 
						exciting, each day, to see what NASA selected. 
					</p>
				</div>

			</div>

			<div class='explanation-div'>

				<div>
					<h3 class='font center-title'>Mars</h3>
				</div>

				<div>
					<p>
						This page will show the user to select different cameras on a Mars Rover to see different 
						terrain on the planet. The user can also select different Mar's days to see how the pictures 
						change over time. 
					</p>
				</div>

			</div>

			<div class='explanation-div'>

				<div>
					<h3 class='font center-title'>EVA</h3>
				</div>

				<div>
					<p>
						This page will show the user the astronauts who have conducted space walks out into space. The 
						page starts out with a graph of the eva's per year. If one clicks on the graph there is a drill down 
						to show the exact EVA's that took place. The user can also select a spacecraft or set of years 
						to see information on EVA's. 
					</p> 
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
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	margin: 30px 85px 10px 85px;
}

@media only all and (max-width: 1250px) {

  .center-title {
		text-align: center;
  }

}

</style>