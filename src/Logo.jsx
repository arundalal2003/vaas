import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Logo = () => {
    return (
        <>
        <nav className="navbar navbar-light bg-dark fixed-top"> 
            <a className="navbar-brand" href="#">
                <img src="Logo2.jpg" width="100" height="auto" alt=""/>
            </a>
          
            
            <button className="btn btn-outline-success my-2 my-sm-0 " > <AccountCircleIcon className= "fs-2" /> {""}LOGIN</button>
        </nav> 
              
        </>
    );
};
export default Logo;
