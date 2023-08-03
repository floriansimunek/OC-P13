import UserService from '@services/UserService';
const { createSlice } = require('@reduxjs/toolkit');

export const handleLogin = (email, password, rememberMe) => {
    return async (dispatch) => {
        try {
            const data = await UserService.login(email, password);

            switch (data.status) {
                case 200:
                    dispatch(
                        loginSuccess({
                            token: data.body.token,
                            rememberMe: rememberMe,
                        })
                    );
                    break;
                case 400:
                case 500:
                default:
                    dispatch(loginFailure(data.message));
                    break;
            }
        } catch (error) {
            dispatch(loginFailure(error));
        }
    };
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: null,
        lastName: null,
        token: null,
        error: null,
    },
    reducers: {
        loginSuccess(state, action) {
            state.token = action.payload.token;
            state.error = null;

            if (action.payload.rememberMe) {
                localStorage.setItem('token', action.payload.token);
            } else {
                localStorage.removeItem('token');
            }
        },
        loginFailure(state, action) {
            state.token = null;
            state.error = action.payload;
            localStorage.removeItem('token');
        },
    },
});

export const { loginSuccess, loginFailure } = userSlice.actions;

export default userSlice.reducer;
