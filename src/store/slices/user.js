import UserService from '@services/UserService';
const { createSlice } = require('@reduxjs/toolkit');

export const handleLogin = (email, password, rememberMe) => {
    return async (dispatch) => {
        try {
            const loginData = await UserService.login(email, password);

            switch (loginData.status) {
                case 200:
                    dispatch(
                        loginSuccess({
                            token: loginData.body.token,
                            rememberMe: rememberMe,
                        })
                    );
                    const userData = await UserService.getUser(
                        loginData.body.token
                    );
                    dispatch(setProfile(userData));
                    break;
                case 400:
                case 500:
                default:
                    dispatch(loginFailure(loginData.message));
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
        setProfile(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
    },
});

export const { loginSuccess, loginFailure, setProfile } = userSlice.actions;

export default userSlice.reducer;
