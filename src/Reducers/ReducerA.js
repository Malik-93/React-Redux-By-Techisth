const initialState = {
    a: 2
}

const ReducerA = (state = initialState, action) => {
switch(action.type){
    case 'UPDATE_A':
    return{
         ...state,
         a: state.a + action.b
    }
    default:
}
return state;
}
export default ReducerA;