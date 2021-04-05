import React, { Component } from 'react';
import "./Login.css";

class Login extends Component {
    render() {
        return (
            <div  >
                <div className="container-fluid" style={{backgroundColor:"#63738a", border:"5px solid #63738a", width:"100vw ",  height:"100vh"}}>
                    <div className="container mt-5" id="cont1" >
                    <span onclick="" class="close" title="Close Signup">&times;</span>
                    <div className="container" id="cont2">
                    
                  
                    <form class="login">
                        <img src="img_avatar2.png" alt="Avatar" class="avatar" style={{width:"40%",height:"auto",  display: "block", borderRadius:"50px", marginLeft:"auto", marginRight:"auto"}}></img>
                        <input type="email" placeholder="email"/><br/>
                        <input type="password" placeholder="password"/><br/>
                        <input type="submit"  value="Login"/> 
                    </form>
                    <p>Don't have an account ? <span onClick="">Sign Up</span> </p>
                    </div>
                    <div><p style={{textAlign:"center", color:"green"}}>Forgot Password</p></div>

                    </div>
                </div>
                
            </div>
        );
    }
}

export default Login;