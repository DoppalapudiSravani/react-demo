
import{useReducer} from "react";


import {createStore} from "redux";
const intialState ={
    balance:0,
    fullName:"",
    mobile:null,
};
function accountReducer(state = intialState, action)  {
    if (action.type =="deposit")
       return {...state,balance:state.balance + action.payload};
       else if(action.type=="withdraw")
       return{...state,balance:state.balance - action.payload};
      else if (action.type =="mobileUpdate")
      return{...state,mobile:action.payload};
      else
    return state

    }
    const store = createStore(accountReducer);

    console.log(store.getState()) 
    store.dispatch({type:"deposit",payload:1000})
    console.log(store.getState())
    import './store'



import './store'

function  App  () {
  return (
    <div>
      <center>
        <h1>hello</h1>
      </center>
    </div>
  )
}
export default App