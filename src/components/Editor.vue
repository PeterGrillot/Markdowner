<template>
	<div id="getNote">
		<div class="user-input">
			<textarea ref="userInput" class="user-input__textarea"
								:value="newNote"
								@keyup="getNote"
								placeholder="Markdown! Start Typing"></textarea>
			<div class="button__group">
				<button class="button"
								@click="startNote"><i class="icon ion-document"></i> New</button>
				<button class="button"
								@click="saveNote"><i class="icon ion-archive"></i> Save</button>
				<button class="button"
								@click="openMenu"><i class="icon ion-folder"></i> Notes</button>
			</div>
		</div>
		<div class="markdown-output" ref="output"></div>	
	</div>
</template>

<script>
import Remarkable from 'remarkable'
const remarkable = new Remarkable()

let toolbarOpen = false;
export default {
	methods: {
		getNote(event) {
			this.$store.dispatch('getNote', event.target.value)
			this.$refs.output.innerHTML = remarkable.render(event.target.value)
			;[...document.querySelectorAll('pre code')].forEach((codeBlock)=>{
				hljs.highlightBlock(document.querySelector('pre code'))
			})
		},
		whatIsNote(){
			return this.$store.dispatch('getNote')
		},
		saveNote() {
			// this.$refs.output.innerHTML = ''
			this.$store.dispatch('addNote')
			// this.$store.dispatch('clearNote')
		},
		startNote() {
			if (this.$refs.userInput.value){
				this.$store.dispatch('addNote')
			}
			this.$refs.output.innerHTML = ''
			this.$store.dispatch('clearNote')
		},
		openMenu(event){
			const toobarEl = document.getElementById('currentNotes')
			if (toolbarOpen === false){
				event.target.setAttribute('data-open',true)
				toobarEl.setAttribute('data-open',true)
			} else {
				event.target.removeAttribute('data-open')
				toobarEl.removeAttribute('data-open')
			}
			toolbarOpen = !toolbarOpen
		},
	},
	computed: {
		newNote() {
			return this.$store.getters.newNote
		}
	},
}

</script>
<style scoped>
.user-input{
	display: flex;
	position: relative;
}
.markdown-output{
	padding: 0 6px;
}
.markdown-output,
.user-input{
	flex-basis: 50%;
	width: 50%;
}
.user-input__textarea {
	height: calc(100% - 12px);
	border: none;
	border-right: 1px solid #ccc;
	flex-grow: 1;
	resize: none;
	background-color: #eee;
	outline: none;
	padding: 6px;
}
code {
	background: #f4f5f6;
	border-radius: .4rem;
	font-size: 86%;
	margin: 0 .2rem;
	padding: .2rem .5rem;
	white-space: nowrap
}

pre {
	background: #f4f5f6;
	border-left: 0.3rem solid #9b4dca;
	overflow-y: hidden
}

pre>code {
	border-radius: 0;
	display: block;
	padding: 1rem 1.5rem;
	white-space: pre
}
</style>