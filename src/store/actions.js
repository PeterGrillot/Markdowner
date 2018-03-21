import * as types from './mutations'

export const menuStatus = ({ commit }, status) => {
	commit('MENU_STATUS')
}
export const getNote = ({ commit }, note) => {
	commit('GET_NOTE', note)
}
export const addNote = ({ commit }) => {
	commit('ADD_NOTE')
}
export const editNote = ({ commit }, note) => {
	commit('EDIT_NOTE', note)
}
export const saveNote = ({ commit }, note) => {
	commit('SAVE_NOTE', note)
}
export const removeNote = ({ commit }, note) => {
	commit('REMOVE_NOTE', note)
}
