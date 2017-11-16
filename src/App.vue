<template>
	<div class="container">
		<header class="header">
			<img src="./assets/logo.png">
			<h1>Markdown</h1>
		</header>
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
	}
}
</script>

<style>
	html, body {
		height: 100%;
		font-family: 'Open Sans Condensed', sans-serif;
		font-size: 18px;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6{
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
		border-radius: 3px;
		font-family: 'Open Sans Condensed', sans-serif;
		font-size: 14px;
		border: none;
		background: linear-gradient(135deg, #0071ce 0%,#ef00ef 100%);
		color: white;
		height: 30px;
		width: auto;
		margin-right: 10px; 
	}
</style>
