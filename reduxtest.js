// Redux lecture no 2

const {createStore} = require ('redux');

const initialState = {
    age: 21
};

const myReducer = (state = initialState, action) =>{
 const newState = {...state};

 if(action.type === 'ADD') {
     newState.age += action.value;
 }
 if(action.type === 'SUBTRACT') {
     newState.age -= action.value;
 }

 return newState;


}

const store = createStore(myReducer);

store.subscribe( () => {
console.log('State Changed' + JSON.stringify(store.getState()))
})

// store.dispatch({type: 'ADD'}); 
// console.log('After add' + JSON.stringify(store.getState()) );
// store.dispatch({type: 'SUBTRACT'})
// console.log('After Subtract' + JSON.stringify(store.getState()) );

store.dispatch({type: 'ADD', value: 10});   // Here value is called payload
store.dispatch({type: 'SUBTRACT', value: 5})