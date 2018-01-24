export const menuStatus =  state => state.status
export const newNote =  state => state.newNote
export const notes =  state => state.notes.filter((note) => { return !note.completed })