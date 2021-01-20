<template>
	<div>
	
	<section>
		<form @submit="submitSelection">
			<div class="form-group">
				<label for="solDay">Sol Day</label>
				<input type="number" class="form-control" id="solDay" placeholder="Enter Sol Day">
			</div>
			<div class="form-group">
				<label for="camera">Camera</label>
				<input type="password" class="form-control" id="camera" placeholder="Please Select Camera">
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</section>

	</div>
</template>

<script>

export default {
	name: "Form",
	methods: {
    submitSelection(evt) {
			evt.preventDefault();
			console.log('test');
      // const payload = {
      //   speech: this.speech,
      // };
      // this.fireActions({ payload });
    },
  }
}
</script>

<style scoped>
section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 2px solid blue;
}

form {
	width: 40%;
}
</style>