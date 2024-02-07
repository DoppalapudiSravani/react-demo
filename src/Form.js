import {useState} from "react";
import {useDispatch} from "react-redux";

function Form() {

    let  dispatch =useDispatch();
   const [amount,setAmount] =useState("");
   const [fullName,setFullName]=useState("");
   const [mobile,setMobile]=useState(null);
    return(
    <> 

    <div className="container"> 
        <h2>Form </h2>
        <div className="row">
            <div className="col-4">
              <input
               className="form-control" 
               type="number" 
                placeholder="Enter amount"
                value={amount}
                onChange={(e)=>{
                    let data =e.target.value;
                    setAmount (data);
                }}
                />
            </div>
            <button className="btn btn-primary col-1" 
                onClick={()=>{
                    dispatch({type:"deposit",payload:amount});
                    setAmount("");
                }}
               > deposite</button>
          <button className="btn btn-danger mx-2 col-1" 
                onClick={()=>{
                    dispatch({type:"withdraw",payload:amount});
                    setAmount("");
                }}
               >
                withdraw 
               </button>     
            
        </div>
        <div className="row mt-2">
            <div className="col-4">
              <input
               className="form-control" 
               type="text" 
                placeholder="Enter FullName"
                value={fullName}
                onChange={(e)=>{
                    let data =e.target.value;
                    setFullName (data);
                }}
                />
            </div>
            <button className="btn btn-primary col-1" 
                onClick={()=>{
                    dispatch({type:"nameUpdate",payload:fullName});
                    setFullName("");
                }}
                >update</button>
                    </div>
          <div className="row mt-2">
            <div className="col-4">
              <input
               className="form-control" 
               type="number" 
                placeholder="Enter Mobile "
                value={mobile}
                onChange={(e)=>{
                    let data =e.target.value;
                    setMobile(data);
                }}
                />
            </div>
            <button className="btn btn-primary col-1" 
                onClick={()=>{
                    dispatch({type: "mobileUpdate",payload:mobile});
                    setMobile("");
                }}
               > update
               </button>
             
            
        </div>

        
        
        
        </div>
     </>
     );
}
export default Form;