<template>
	<div class="container">
		<header class="header">
			<h1>Markdown</h1>
		</header>
		<button type="button"
									@click="menu()"
									class="screen"
									v-if="getMenuStatus">
					</button>
		<toolbar class="toolbar"></toolbar>
		<editor class="editor"></editor>
	</div>
</template>
<script>
import Toolbar from './components/Toolbar'
import Editor from './components/Editor'

export default {
	name: 'app',
	components: {
		Toolbar,
		Editor
	},
	methods: {
		menu() {
			this.$store.dispatch('menuStatus')
		},
	},
	computed:{
		isMenuOpen() {
			if( this.$store.getters.menuStatus === true){
				return 'open'
			}
		},
		getMenuStatus() {
			return this.$store.getters.menuStatus
		}
	}
}
</script>

<style>
	html, body {
		height: 100%;
		font-family: 'Open Sans', sans-serif;
		font-size: 18px;
	}
	h1,h2,h3,h4,h5,h6{
		font-family: 'Playfair Display', serif;
	}
	.container{
		display: flex;
		height: 100%;
		position: relative;
	}
	.header {
		position: absolute;
	}
	.screen{
		position: fixed;
		top:0;
		left:0;
		height: 100%;
		width: 100%;
		background-color: rgba(0,0,0,0.2);
		z-index: 1;
		transition: all 400ms;
	}
	.editor {
		display: flex;
		height: 100%;
		flex-basis: 100%;
	}
	.toolbar { 
		position: absolute;
	}
	.button__group{
		bottom: 0;
		right: 0;
		position: absolute;
		height: 90px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.button{
		border-radius: 100%;
		border: none;
		background: linear-gradient(135deg, #0071ce 0%,#ef00ef 100%);
		color: white;
		height: 60px;
		width: 60px;
		margin-right: 10px;
		position: relative;
		cursor: pointer;
		outline: none;
	}
	.button:after {
    content: attr(data-tooltip);
    font-size: 12px;
    display: block;
    width: 100px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: .3s all;
	}
	.button:hover{
		background: linear-gradient(90deg, #0071ce 0%,#ef00ef 100%);
	}
	.button:hover:after {
    transition: .6s all;   
    transition-delay: .3s; 
		visibility: visible;
    opacity: 1;
	}
</style>
