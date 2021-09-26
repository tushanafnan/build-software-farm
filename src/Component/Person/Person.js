import React from 'react';
import './Person.css'

const Person = (props) => {

    const { name, role, age, country, salary,  img } = props.person || {};
   


    return (

        <div className="col">
            
        <div className="card text-center h-100 bg-secondary bg-gradient"> 
        <div className="img-div"> <img src={img} className="card-img-top " alt=""/> </div>
        <div className="card-body text-light">
        <h5 className="card-title">{name}</h5>
        <div className="card-text"><h6> Position : {role} <br /> Age : {age} <br /> Country : {country} <br /> Expected Salary : ${salary}   </h6> </div>
        <div className="card-footer border-0 bg-transparent"> <button className="btn bg-info w-100" onClick={()=>props.AddToCart(props.person) } >    <i className="fas fa-user-check"></i> <b> Add to Cart</b></button> </div>
        </div>
        </div>
        </div>
        );
        };

export default Person;