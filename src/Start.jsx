import React from 'react';
import './Input.css';

const Start =() =>{
    return(
<>
    <div className="container-fluid  mt-5 p-5 text-center"  style={{backgroundColor:"#2b3e90", margin: "30px 0px 130px 0px"}}>
    <h1  style={{color:"#29afe1",fontSize:"50px"}}><b>We will find the <strong className='text-light ' style={{color:"#fff"}}>right Mortgage</strong> for you!</b></h1>
    <p className="text-light" style={{fontSize:"20px"}}>No hassle, no obligation</p>
    <button type="button" className="btn btn-light"  ><span >START NOW</span></button>


    </div>
    </>
    );
}

export default Start;