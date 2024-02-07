import {createStore} from "redux";
const intialState ={
    balance:0,
    fullName:"",
    mobile:null,
};
function accountReducer(state=intialState,action){
    if (action.type =="deposit")
       return {...state,balance:state.balance+action.payload};
       else if(action.type=="withdraw")
       return{...state,balance:state.balance-action.payload};
    return state

    }
    const store =createStore(accountReducer);

    console.log(store.getState()) 
    store.dispatch({type:"deposit",payload:1000})
    console.log(store.getState())




