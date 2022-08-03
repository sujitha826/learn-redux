// Reducer 1 - that has 2 actions added.

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'ADD':
            return state + action.payload;
        default:
            return state;
    }
}

export default counterReducer;