<template>
	<div>
		<Pic />
		<Explanation />
	</div>
</template>

<script>
import Pic from "@/components/home/InfoArea/Pic.vue";
import Explanation from "@/components/home/InfoArea/Explanation.vue";

export default {
	name: "InfoArea",
	components: {
		Pic,
		Explanation
	}
}
</script>

<style scoped>

</style>