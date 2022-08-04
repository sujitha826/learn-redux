let initialState = { username: "", age: 0, email: "" };
const profileReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'LOG_IN':
            return state = action.payload;
        case 'LOG_OUT':
            return initialState;
        default:
            return initialState;
    }
}

export default profileReducer;