export const selectUserError = () => {
    return (state) => state.user.error;
};

export const selectUserToken = () => {
    return (state) => state.user.token;
};

export const selectUserId = () => {
    return (state) => state.user.id;
};

export const selectUserFirstname = () => {
    return (state) => state.user.firstname;
};

export const selectUserLastname = () => {
    return (state) => state.user.lastname;
};