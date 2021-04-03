import React from 'react';

const Cards = ()=>{
    const style = {
        
        height: "24rem",
       
    }
    const imgStyle ={
        height: "200px"
    }

    return(
        <>
        
        <div className=" container row mt-5 mx-auto">
            <div className=" col-md-4 ">
                <div className="card shadow   bg-white rounded" style={style}>
                    <img className="card-img-top image-size-refine" src="about1.png"  alt="Card image cap" style={imgStyle}/>
                        <div className="card-body ">
                            <h4 className="card-title">Purchase</h4>
                            <p className="card-text">Whether you’re buying your first home or you’ve owned before, let us guide you in navigating this major life decision.</p>
                        </div>
                </div>
            </div>
            <div className=" col-md-4 " >
                <div className="card shadow bg-white rounded " style={style}>
                     <img className="card-img-top image-size-refine" src="about2.png" alt="Card image cap" style={imgStyle} />
                        <div className="card-body">
                            <h4 className="card-title">Refinance</h4>
                            <p className="card-text pb-4">We’re committed to refinance with lowest rates. Start your application today!</p> 
                        </div>
                </div>
            </div>
            <div className=" col-md-4 " >
                <div className="card   shadow  bg-white rounded"  style={style}>
                    <img className="card-img-top image-size-refine" src="about3.jpg" alt="Card image cap" style={imgStyle} />
                        <div className="card-body ">
                            <h4 className="card-title">Apply</h4>
                            <p className="card-text">Whether you’re buying your first home or you’ve owned before, let us guide you in navigating this major life decision.</p>
                        </div>
                </div>
            </div>
        </div>
        </>

    );

};

export default Cards;
