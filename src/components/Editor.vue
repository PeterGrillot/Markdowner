<template>
	<div id="getNote">
		<div class="user-input">
			<input class="filename__input" type="text" ref="filename" value="untitled">
			<textarea ref="input" class="user-input__textarea"
								:value="newNote"
								@keyup="getNote"
								placeholder="Markdown! Start Typing"></textarea>
			<div class="button__group">
				<button class="button"
								@click="addNote"  data-tooltip="Save to Menu"><i class="icon ion-plus"></i></button>
				<button class="button"
								@click="downloadNote"  data-tooltip="Download"><i class="icon ion-archive"></i></button>
				<button class="button"
								@click="menu()" data-tooltip="Menu"><i class="icon ion-folder"></i></button>
			</div>
		</div>
		<div class="markdown-output" ref="output"></div>	
	</div>
</template>

<script>
import Remarkable from 'remarkable';
const remarkable = new Remarkable();
let toolbarOpen = false;
export default {
	methods: {
		getNote(event) {
			this.$store.dispatch('getNote', event.target.value);
			this.$refs.output.innerHTML = remarkable.render(event.target.value);
			[...document.querySelectorAll('pre code')].forEach((codeBlock)=>{
				hljs.highlightBlock(document.querySelector('pre code'));
			});
		},
		whatIsNote(){
			return this.$store.dispatch('getNote');
		},
		addNote() {
			if(!!this.$refs.input.value){
				this.$refs.output.innerHTML = '';
				this.$store.dispatch('addNote');
				this.$store.dispatch('clearNote');
			}
		},
		downloadNote(event) {
			const filename = this.$refs.filename.value;
			if(!this.$refs.input.value){
				alert('Nothing to save, start typing!');
			} else{
				const element = document.createElement('a');
				element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.$refs.input.value));
				element.setAttribute('download', `${filename}.md`);
				element.style.display = 'none';
				document.body.appendChild(element);
				element.click();
				document.body.removeChild(element);
			}			
		},
		menu(status) {
			this.$store.dispatch('menuStatus');
		},
	},
	computed: {
		newNote() {
			return this.$store.getters.newNote;
		},
		menuStatus() {
			return this.$store.getters.menuStatus;
		}
	}
}
</script>
<style scoped>
.user-input{
	display: flex;
	position: relative;
}
.filename__input{
	position: absolute;
	color: #888888;
	bottom: 1.2rem;
	left: 1rem;
	font-size: 1.4rem;
	background: transparent;
	border: navajowhite;
	border-bottom: 2px solid #ccc;
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