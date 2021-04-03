import React from 'react';
import './Input.css';


const About =() => {

    const topMargin = {
        marginTop : "210px",
      
        
    }
    return <>
    <div   style={topMargin}>
        <div className="container-fluid ml-5">
   
            <div className="row " >
                <div className= "col-lg-6 col-md-6 col-12  ">
                    <h1 className=" text-bg">YOUR JOURNEY BEGINS<br/> WITH US!</h1>
                    <p className= "  pb-2 " id="about-menu"> Lowest mortgage rates<br/>
                        Efficient and Faster Closing Process<br/>
                        A Team available anytime to serve your mortgage needs<br/>
                        Personalized customer service<br/>
                    </p>
                    <button class="btn btn-primary quote" type="submit">GET A QUOTE</button>
                </div>
                <div className= "col-lg-6 col-md-6 col-12" >
                    <img className= "img-fluid " src={"img2.png"} style = {{width:"550px", height:"350px"}} alt="loan image" />
                </div>
            </div>  
         </div>    
        <div className="container">
            <div className= "row pt-5 ">
                <div className= "col-lg-6 col-md-6 col-12 pt-5">
                    <h1  className="about" ><b>About Us</b></h1>
                    <p className="text-justify">
                    At VAS Mortgage LLC we are committed to helping families 
                    and individuals achieve the dream of home ownership. 
                    We will help you answer all of your questions about 
                    exactly what to expect when you get a mortgage with us. 
                    We strive to provide you a very pleasant experience with our team.
                    </p>
                    <p>
                    For us your satisfaction comes first. So expect that we have a team 
                    behind that cares about you. We will communicate in the best way that’s 
                    comfortable for you, providing timely updates about the progress of your loan.
                    </p>

                </div>
                <div className= "col-lg-6 col-md-6 col-12 pt-5">
                    <img src ="about.jpg" className= "img-fluid" style={{width:"600px", height:"320px"}}/>

                </div>
            </div>
        </div>
    </div>
    </>
    
}

export default About;