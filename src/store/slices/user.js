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
                    const userData = await UserService.getUserData(
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

const initialState = () => {
    return {
        id: null,
        firstName: null,
        lastName: null,
        token: null,
        error: null,
    };
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState(),
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
            state.error = null;
            state.id = action.payload.body.id;
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            console.log(state.firstName, state.lastName);
        },
        logout(state, action) {
            localStorage.removeItem('token');
            return initialState();
        },
    },
});

export const { loginSuccess, loginFailure, setProfile, logout } =
    userSlice.actions;

export default userSlice.reducer;
