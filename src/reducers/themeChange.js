const themeReducer = (state = "blue", action) => {
    switch (action.type) {
        case 'LOG_IN':
            return state = "green";
        case 'LOG_OUT':
            return state = "blue";
        default:
            return state;
    }
}

export default themeReducer;