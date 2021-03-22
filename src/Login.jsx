import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Login =()=> {

   const style ={
       display:"flex",
       justifyContent: "center",
        alignItems: "center",
        height: "600px"
    }
    const formStyle={
        backgroundColor:"#B6B6B4", 
        borderRadius: "10px", 
        width : "400px", 
        height: "500px",
        padding: "30px 10px 0px 10px"   
    }

    return(
         <>
         <div  style={style}>
         <form style={formStyle}>
         <div className="mb-3">
            <div style={{paddingLeft: "125px"}}><AccountCircleIcon style={{ fontSize:"130px " ,   textAlign:"center"}}/> </div> <br/>
            <label for="exampleDropdownFormEmail2" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" onChange= "handleData"/>
        </div>    
        <div className="mb-3">
            <label for="exampleDropdownFormPassword2" className="form-label">Password</label>
            <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" onChange= "handleData"/>
        </div>
        <div className="mb-3">
            <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck2" onChange= "handleData"/>
            <label className="form-check-label" for="dropdownCheck2">
                Remember me
            </label>
        </div>
        </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
        </div>
</>
    );
}

export default Login;