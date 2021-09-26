import React from 'react';
import './Cart.css'


const Cart = (props) => {
    // console.log(props.cart);
    const {cart}=props;
   const total= cart.reduce((previous, current)=> previous+current.salary,0)
   const name = cart.map (n => <h5> {n.name}</h5>, "");

    return (
        <div className="card grad h-10">
            <div className="card-body">
               
<h1 className="card-title fs-2"> <span className="text-warning"> Prefered</span> <span className="text-light">Candidates</span> </h1> <br />

<h2 className="card-text fs-4"> Selected : {name} </h2>
<h2 className="card-text fs-4"> Total Selected Candidates : {cart.length} </h2>
<h2 className="card-text fs-3"> Total Salary : {total} </h2>
<button className="btn bg-warning w-100 mt-1"> <i class="far fa-check-circle"></i> <b>Continue to Process</b>  </button>
            </div>
        </div>
    );
};

export default Cart;