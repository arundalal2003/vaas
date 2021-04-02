import React, {Component} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Form from "./Form";




export default class Logo extends Component {
   constructor(){
       super();
       this.state={
           show:false
       }
   }

    render() {
        return (
        //     <div>
            
        // <nav className="navbar navbar-light bg-white fixed-top shadow"  > 
        //     <a className="navbar-brand" href="#">
        //         <img src="vasmortgage.jpg" style={{width:"90px", height:"90px", }} alt=""/>
        //     </a>
          
            
        // </nav> 
        <div className="container-fluid  bg-white fixed-top shadow">
        <a  href="#">
                <img src="vasmortgage.jpg" style={{width:"110px", height:"110px", }} alt=""/>
            </a>

        </div>
              
    
            // </div>
        )
    }
}




// const Logo = () => {
//     const openLogin = () => {<Form/>;}
//     return (
//         <>
//         <nav className="navbar navbar-light bg-dark fixed-top"> 
//             <a className="navbar-brand" href="#">
//                 <img src="Logo2.jpg" width="100" height="auto" alt=""/>
//             </a>
          
            
//             <button className="btn btn-outline-success my-2 my-sm-0 " onClick={this.openLogin} > <AccountCircleIcon className= "fs-2" /> {""}LOGIN</button>
//         </nav> 
              
//         </>
//     );
// };
// export default Logo;
