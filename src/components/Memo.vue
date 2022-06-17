<template>
	<div class="memo">
		<button class="btn btn-primary btn-block">+ 추가</button>
		<ul>
			<li v-for="(d, idx) in data" :key="idx">{{ d }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	setup() {
		const data = [
			'메모 1 내용',
			'메모 2 내용',
			'메모 3 내용',
			'메모 4 내용',
			'메모 5 내용',
		];

		return { data };
	},
};
</script>

<style lang="scss" scoped>
.memo button {
	text-align: center;
}
.memo ul {
	list-style: none;
	padding: 15px 0;
	margin: 0;

	li {
		padding: 15px, 10px;
		margin: 5px;
	}
}
</style>
