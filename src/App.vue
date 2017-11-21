<template>
	<div class="container">
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
		font-family: 'Open Sans', sans-serif;
		font-size: 18px;
	}
	.container{
		display: flex;
		height: 100%;
		position: relative;
		overflow: hidden;
	}
	.header {
		position: absolute;
	}
	.editor {
		display: flex;
		height: 100%;
		flex-basis: 100%;
		overflow: hidden;
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
		font-family: 'Open Sans', sans-serif;
		font-size: 14px;
		border: none;
		background: linear-gradient(135deg, #0071ce 0%,#ef00ef 100%);
		color: white;
		height: 30px;
		width: auto;
		margin-right: 10px; 
	}
</style>
