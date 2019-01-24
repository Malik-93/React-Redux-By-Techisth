//lec no 3 redux

// const initialState = {
//     age: 20
// }

// const reducer = (state = initialState, action) => {

//     const newState = { ...state }

// switch(action.type){
//     case 'AGE_UP':
//     newState.age++
//     break;
//     case 'AGE_DOWN':
//     newState.age--
//     break;
//     default:
// }

//     return newState
// }
// export default reducer;

// lec no 4 redux
// const initialState = {
//     age: 20,
//     history: []
// }

// const reducer = (state = initialState, action) => {

//     const newState = { ...state }

// switch(action.type){
//     case 'AGE_UP':
//  return{
//      ...state,
//      age: state.age + action.value,
//      history: state.history.concat( {id: Math.random(), age:state.age + action.value}) 
//       }
    //   break;
    // newState.age += action.value
    // case 'AGE_DOWN':
    // return{
    //     ...state,
    //     age: state.age - action.value,
    //     history: state.history.concat({id: Math.random(), age:state.age - action.value})
    // }
    // break;

//     case 'DEL_ITEM':
//     return{
//         ...state,
//         history: state.history.filter(item => item.id !== action.key)
//     }

//     default:
// }

//     return newState
// }
// export default reducer;

//<<<<<<<------------------------------->>>>>>>>>>
// Lecno 5 redux 
// Important Note combine reducers part is in reducers folder

// const initialState = {
//     a: 1,
//     b: 1
// }

// const reducer = (state = initialState, action) => {
// switch(action.type){
 
//     case 'REDUCE_A':
//     return{
//          ...state,
//          a: state.a - 2
//     }
//     case 'REDUCE_B':
//     return{
//          ...state,
//          b: state.b - 1
//     }
 
 
//     case 'UPDATE_A':
//     return{
//          ...state,
//          a: state.a + state.b
//     }
    
//     case 'UPDATE_B':
//     return{
//         ...state,
//         b:state.a + state.b
//     }
// default:
// }

//     return state;
// }
// export default reducer;