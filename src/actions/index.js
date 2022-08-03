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

export const login = () => {
    return {
        type: "SIGN_IN"
    }
}