// Action Creators are the functions that are dispatched to emit a change – all they do is return an action.

// actionCreator 
let nextTodoId = 0
export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text, //<--ES6. same as text:text, in ES5
		completed: false //<-- initially this is set to false
	}
}