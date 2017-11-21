<template>
<div id="currentNotes">
	<h3>Current({{notes.length}})</h3>
	<ul class="list-group">
		<li class="list-group-item"
				v-for="note in notes">
			{{note.body | truncate(20)}}
			<div class="btn-group">
				<button type="button"
								@click="edit(note)"
								class="button">
					<span class="icon ion-edit"></span> Edit
				</button>
				<button type="button"
								@click="remove(note)"
								class="button">
					<span class="icon ion-trash-a"></span> Remove
				</button>
			</div>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	methods: {
		edit(note) {
			this.$store.dispatch('editNote', note)
		},
		complete(note) {
			this.$store.dispatch('completeNote', note)
		},
		remove(note) {
			this.$store.dispatch('removeNote', note)
		}
	},
	computed: {
		notes() {
			return this.$store.getters.notes
		}
	}
}

</script>

<style scoped>
.list-group{
	padding: 0;
	margin: 20px 0;
	list-style: none;
}
.toolbar{
	width: 380px;
	padding: 0 10px;
	height: 100%;
	background-color: white;
	position: absolute;
	z-index: 1;
	transform: translateX(-400px);
	transition: all 400ms;
}
.toolbar[data-open]{
	transform: translateX(0);
	transition: all 400ms;
}
</style>
