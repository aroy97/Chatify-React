const initialState = {
    userToken: ""
};

export const loginReducer = (state = initialState, action) => {
    // console.log(state, action);
    switch (action.type) {
        case "LoginModule":
            console.log("Hi ",action.userToken);
            return {
                userToken: action.userToken
            }
        default:
            return {
                state
            }
    }
}
// export default loginReducer