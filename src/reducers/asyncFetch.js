const initialState = {
    loading: false,
    users: [],
    error: ""
}

const fetchReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return state = {
                ...state, loading: true
            };
        case 'FETCH_USERS_SUCCESS':
            return state = {
                ...state, loading: false,
                users: action.payload,
                error: ''
            };
        case 'FETCH_USERS_FAILURE':
            return state = {
                ...state, loading: false,
                users: [],
                error: action.payload
            };
        default:
            return initialState;
    }
}


export default fetchReducer;