const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        login(state, action) {},
    },
});

export const { login } = userSlice.actions;

export default userSlice;
