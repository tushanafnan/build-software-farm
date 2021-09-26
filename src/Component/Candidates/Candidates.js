import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Person from "../Person/Person";



const Candidates = () => {
const [candidates, setCandidates] = useState ([]);
const [cart,setCart] = useState ([]);
const AddToCart = (candidate) => {
const newCart = [...cart,candidate];
setCart (newCart);

}
useEffect(() => {
    fetch('https://raw.githubusercontent.com/tushanafnan/data/main/fakedata.JSON')
      .then(res => res.json())
      .then(data => setCandidates(data));
  }, [])

  return ( 
    
    <div className="row">
    <div className="col-md-9">

    <div className="row g-4 row-cols-1 row-cols-md-3 ms-2">
          
    {candidates.map((person => <Person key={person.key} person={person} AddToCart = {AddToCart}></Person>))}
          
    </div>
    </div>
    <div className="col-md-3">
    <Cart cart={cart}/>
    </div>
    </div>

);
    
    

}

export default Candidates;
