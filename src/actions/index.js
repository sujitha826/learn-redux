import axios from 'axios';

export const increment = () => {
    return {
        type: "INCREMENT",
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const add = (number) => {
    return {
        type: "ADD",
        payload: number
    }
}

export const login = (data) => {
    return {
        type: "LOG_IN",
        payload: data
    }
}

export const logout = () => {
    return {
        type: "LOG_OUT"
    }
}

export const fetchUsersRequest = () => {
    return {
        type: "FETCH_USERS_REQUEST"
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: "FETCH_USERS_SUCCESS",
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: "FETCH_USERS_FAILURE",
        payload: error
    }
}

export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest);
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const users = response.data;
                // console.log(JSON.stringify(users));
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message));
            })
    }
}