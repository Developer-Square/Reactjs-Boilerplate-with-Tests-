import { createSlice } from '@reduxjs/toolkit'

// Change this to what you initialState will hold
interface TodosState {
    value: number
}

const initialState: TodosState = {
    value: 0
}

export const todosSlicer = createSlice({
    name: 'todosSlicer',
    initialState,
    reducers: {
        addTodos: () => { },
    }
})

export const { addTodos } = todosSlicer.actions

export default todosSlicer.reducer