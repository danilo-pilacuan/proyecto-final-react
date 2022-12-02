import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
	name: 'tokens',
	initialState: "my-dummie-token",
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: new Date(),
				title: action.payload.title,
				completed: false,
			};
			state.push(todo);
		},
		setToken: (state, action) => {
			// const todo = {
			// 	id: new Date(),
			// 	title: action.payload.title,
			// 	completed: false,
			// };
			console.log("🚀 ~ file: tokenSlice.js:22 ~ action.payload.value", action.payload.value)
			//state="action.payload.value";
			console.log("🚀 ~ file: tokenSlice.js:22 ~ action.payload.value", action.payload.value)
			return action.payload.value
		},
		
	},
});


export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;