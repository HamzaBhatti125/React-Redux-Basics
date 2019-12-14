export const increment = (n) =>{
    return {
        type : 'INCREMENT',
        payload: n
    }
}

export const decrement = () =>{
    return {
        type : 'DECREMENT'
    }
}

export const user = (name) => {
    return{
        type : 'USER_SIGNIN',
        payload: name
    }
}