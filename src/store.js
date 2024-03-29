import {createStore} from "redux";
const intialState ={
    balance:0,
    fullName:"",
    mobile:null,
};
function accountReducer(state=intialState,action){
    switch (action.type) {
        case"deposit":
    
       return {...state,balance:state.balance+ +action.payload};
       case"withdraw":
       return{...state,balance:state.balance- +action.payload};
       case "mobileUpdate":
        return{...state,mobile: action.playload};
        case "nameUpdate":
         return{...state,fullName:action.payload};
         case "reset":
            return intialState;
            default:
                return state;

              
    }
}
    const store =createStore(accountReducer);

    export default store;



