const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'USER_SIGNIN':
            return !state;
        default : 
            return state;
        
    }
}
export default loggedReducer;