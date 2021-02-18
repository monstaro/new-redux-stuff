import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '0', name: 'Josh Johnson'},
    { id: '1', name: 'Ben Jorgensen'},
    { id: '2', name: 'Milfred Cubicle'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer;