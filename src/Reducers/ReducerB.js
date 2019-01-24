const initialState = {
    b: 1
}

const ReducerB = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_B':
            return {
                ...state,
                b: action.a + state.b
            }
        default:
    }

    return state;
}
export default ReducerB;