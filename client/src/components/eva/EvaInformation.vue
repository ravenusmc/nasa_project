<template>
	<div>
		Info 
		{{ this.vehicleInformation }}
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: "EvaInformation",
	computed: {
    ...mapGetters('eva', [
			'vehicleInformation',
    ]),
  },
}
</script>

<style scoped>

</style>