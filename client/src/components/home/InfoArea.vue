<template>
	<div>
		<Pic />
		<Explanation />
		<ExplanationArea />
	</div>
</template>

<script>
import Pic from "@/components/home/InfoArea/Pic.vue";
import Explanation from "@/components/home/InfoArea/Explanation.vue";
import ExplanationArea from  "@/components/home/InfoArea/ExplanationArea.vue"

export default {
	name: "InfoArea",
	components: {
		Pic,
		Explanation,
		ExplanationArea,
	}
}
</script>

<style scoped>

</style>