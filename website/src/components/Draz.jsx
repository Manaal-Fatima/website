import React, {useState} from 'react';
import {   Link } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import { Drawer, Button } from 'antd';

const  Draz = ({ isVisible, closeDrawer ,selectedCard }) => {
  const[count, setCount]=useState(1);

  const increment=()=>{
    setCount(count+1);
  };
  const decrement=()=>{
    if(count>0)
    setCount(count-1);
  };
 
  return (
    <Drawer
    title="Product details"
    placement='right'
    onClose={closeDrawer}
    open={isVisible} 
    closeIcon={null}
    
    
    >
      {selectedCard && (
        <div>
           <img
            src={selectedCard.imageUrl} // Image source
            alt={selectedCard.title}
            style={{ maxWidth: '70%' }}
          />
          <h2>{selectedCard.title}</h2>
          <p>{selectedCard.description}</p>

          <div style={{ display: "flex", alignItems: "center" }}>
  <Button type="primary" onClick={decrement}>
    -
  </Button>
  <p style={{ margin: "0 10px" }}>{count}</p>
  <Button type="primary" onClick={increment}>
    + 
  </Button>
</div>
<h1>..........</h1>
<Button  type="primary" key="add-to-cart">
<Link to="/checkout">
              add to cart
              </Link>
</Button>
        

        </div>
      )}
    </Drawer>
  );
};

export default Draz;