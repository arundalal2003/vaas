import React from 'react';

const Cards = ()=>{
    const style = {

        width: "18rem",
        borderStyle: "none"
    }
    const imgStyle ={
        width : "330px",
        height: "200px"
    }

    return(
        <>

        <div className="container row mt-5 mx-auto">
            
            <div className="card col-lg-4 col-md-4 col-12 mt-5 shadow p-3 mb-5 bg-white rounded" style={style}>
            <img className="card-img-top" src="about1.webp"  alt="Card image cap" style={imgStyle}/>
                <div className="card-body">
                    <h5 className="card-title">Purchase</h5>
                    <p className="card-text">Whether you’re buying your first home or you’ve owned before, let us guide you in navigating this major life decision.</p>
                    
                </div>
                
            </div>
            <div className="card col-lg-4 col-md-4 col-12 mt-5 shadow p-3 mb-5 bg-white rounded" style={style}>
            <img className="card-img-top" src="about2.webp" alt="Card image cap" style={imgStyle}/>
                <div className="card-body">
                    <h5 className="card-title">Refinance</h5>
                    <p className="card-text">We’re committed to refinance with lowest rates. Start your application today!</p><br/>
                
                </div>
            </div>
            <div className="card col-lg-4 col-md-4 col-12 mt-5  shadow p-3 mb-5 bg-white rounded" style={style}>
            <img className="card-img-top" src="about3.jpeg" alt="Card image cap" style={imgStyle}/>
                <div className="card-body">
                    <h5 className="card-title">Apply</h5>
                    <p className="card-text">Whether you’re buying your first home or you’ve owned before, let us guide you in navigating this major life decision.</p>
                    
                </div>
            </div>

        </div>
        </>

    );

};

export default Cards;
