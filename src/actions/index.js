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

export const signin = () => {
    return {
        type: "SIGN_IN"
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
