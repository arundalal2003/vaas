import React, { Component } from 'react';
import "./Signup.css";

class SignUp extends Component {
    render() {
        return (
            <div  >
                <div className="container-fluid" style={{backgroundColor:"#63738a", border:"5px solid #63738a", width:"100vw ",  height:"100vh"}}>
                    <div className="container mt-5" id="container1" >
                    <span onclick="" class="close" title="Close Signup">&times;</span>
                    <div className="container" id="container2">
                    
                    <h1 style={{textAlign:"center"}}>
                        Register
                    </h1>
                    
                    <p>Create your account. It's free and only takes a minute.</p>
                    <form class="signup">
                        
                        <input type="text" placeholder="first name"/><br/>
                        <input type="text" placeholder="last name"/><br/>
                        <input type="email" placeholder="email"/><br/>
                        <input type="password" placeholder="password"/><br/>
                        <input type="text" placeholder="confirm password"/><br/>
                        <input type="checkbox"/><label style= {{paddingLeft: "10px"}}>I accept the Terms of Use & Privacy Policy</label>
                        <input type="submit"  value="Register Now"/> 
                    </form>
                    <p>Already have an account ? <span onClick="">Sign in</span> </p>
                    </div>

                    </div>
                </div>
                
            </div>
        );
    }
}

export default SignUp;