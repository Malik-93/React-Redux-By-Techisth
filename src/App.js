// Lec no 5
import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css'
class App extends Component{
  render(){
    return(
      <div>
       <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>
       <div className="col"><span>A:</span><span>{this.props.a}</span></div>
       <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
       <div className="col"><span>B:</span><span>{this.props.b}</span></div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
return {
  a: state.rA.a,
  b: state.rB.b
}
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateA: (b) => dispatch({type: 'UPDATE_A', b:b}),
    updateB: (a) => dispatch({type: 'UPDATE_B', a:a})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);




// lec no 4 redux

// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// class App extends Component {

  // delHandle = (id) => {
  //  this.props.history.filter((item) => {
  //    return id !== item.id
  //  } )
  // }
//   render() {
//     return (
//       <div className='App'>
//         <h1>Age:<span>{this.props.age}</span></h1>
//         <button onClick={this.props.onAgeUp}>Age Up</button>
//         <button onClick={this.props.onAgeDown}>Age Down</button>
//         <hr />
//         <div className="history"><h1>History:</h1></div>
//         <div> 
//           <ul>
//             {
//               this.props.history.map(item => (
//                 <li key={item.id} onClick={() => this.props.delHandle(item.id)}>{console.log(item.id)}
//                 {
//                   item.age
//                 }
                 
//                 </li>
//               ))
//             }
//           </ul>
//           </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     age: state.age,
//     history: state.history
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAgeUp : () => dispatch({type: 'AGE_UP', value: 10}),
//     onAgeDown : () => dispatch({type: 'AGE_DOWN', value: 5}),
//     delHandle: (id) => dispatch ({type: 'DEL_ITEM', key: id})

//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps) (App);

//<<<<<<<<<<-------------------->>>>>>>>>>





   // lec no 3 redux

// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <h1>Age:<span>{this.props.age}</span></h1>
//         <button onClick={this.props.onAgeUp}>Age Up</button>
//         <button onClick={this.props.onAgeDown}>Age Down</button>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     age: state.age
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAgeUp : () => dispatch({type: 'AGE_UP', value: 10}),
//     onAgeDown : () => dispatch({type: 'AGE_DOWN', value: 5})

//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps) (App);

// <<<<<<<<<<---------------------->>>>>>>>>





// lec#2 Only_Redux

// const {createStore} = require ('redux');

// const initialState = {
//     age: 21
// };

// const myReducer = (state = initialState, action) =>{
//  const newState = {...state};

//  if(action.type === 'ADD') {
//      newState.age += action.value;
//  }
//  if(action.type === 'SUBTRACT') {
//      newState.age -= action.value;
//  }

//  return newState;


// }

// const store = createStore(myReducer);

// store.subscribe( () => {
// console.log('State Changed' + JSON.stringify(store.getState()))
// })

// store.dispatch({type: 'ADD'}); 
// console.log('After add' + JSON.stringify(store.getState()) );
// store.dispatch({type: 'SUBTRACT'})
// console.log('After Subtract' + JSON.stringify(store.getState()) );

// store.dispatch({type: 'ADD', value: 10});   // Here value is called payload
// store.dispatch({type: 'SUBTRACT', value: 5})

//  <<<<<<_____________________________________>>>>>>>>>>>>>>


