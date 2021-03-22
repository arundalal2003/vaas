import React from 'react';

const Cards = ()=>{
    const style = {

        width: "18rem",
        borderStyle: "none"
    }

    return(
        <>

        <div className="container row mt-5 mx-auto">
            <h1 className="text-center  text-primary pt-5"> Services</h1>
            <hr/>
            <div className="card col-lg-4 col-md-4 col-12 mt-5 shadow p-3 mb-5 bg-white rounded" style={style}>
            <img className="card-img-top" src="packing image.jpg"  alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Purchase</h5>
                    <p className="card-text">Whether you’re buying your first home or you’ve owned before, let us guide you in navigating this major life decision.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                
            </div>
            <div className="card col-lg-4 col-md-4 col-12 mt-5 shadow p-3 mb-5 bg-white rounded" style={style}>
            <img className="card-img-top" src="packing image.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Refinance</h5>
                    <p className="card-text">We’re committed to refinance with lowest rates. Start your application today!</p><br/>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card col-lg-4 col-md-4 col-12 mt-5  shadow p-3 mb-5 bg-white rounded" style={style}>
            <img className="card-img-top" src="packing image.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Apply</h5>
                    <p className="card-text">Whether you’re buying your first home or you’ve owned before, let us guide you in navigating this major life decision.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
        </>

    );

};

export default Cards;
