import Vue from 'vue';
import * as types from './mutation-types';

export default {
	[types.MENU_STATUS](state) {
		state.status = !state.status;
		console.log(`state: ${state.status}`);
	},
	[types.GET_NOTE](state, note) {
		state.newNote = note;
	},
	[types.ADD_NOTE](state) {
		state.notes.push({
			body: state.newNote,
			completed: false
		});
	},
	[types.EDIT_NOTE](state, note) {
		let notes = state.notes;
		notes.splice(notes.indexOf(note), 1);
		state.notes = notes;
		state.newNote = note.body;
	},
	[types.REMOVE_NOTE](state, note) {
		let notes = state.notes;
		notes.splice(notes.indexOf(note), 1);
	}
}
