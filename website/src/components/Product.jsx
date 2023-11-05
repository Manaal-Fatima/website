import React, { useState } from 'react';
import Draz from './Draz';
import { Card, Button, } from 'antd';
import '../style/Product.css';
const { Meta } = Card;
const cardData = [
  {
    title: "2 piece  Ready to wear ",
    description: "in khaddar blue /3999",
    imageUrl: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dwcf312198/images/hi-res/est23428_blue_1.jpg?sw=800&sh=1200"
  },
  {
    title: "Unstitched 3 piece ",
    description: "embroided shirt dress /4500",
    imageUrl: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw7db6c21e/images/hi-res/est23422_pink_1.jpg?sw=800&sh=1200"
  },
  {
    title: "Multi coloured 2 pc",
    description: "Ready to wear /3999",
    imageUrl: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw0586b8ee/images/hi-res/est23427_multi_1.jpg?sw=800&sh=1200"
  },
  {
    title: "embroided shirt/trouser&chiffon dupatta",
    description: "unstitched light purple / 4500",
    imageUrl: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw2231b5f5/images/hi-res/est23421_purple_1.jpg?sw=800&sh=1200"
  },
  {
    title: "printed shirt/trouser& silk printed dupatta  for casual function",
    description: "unstitched red /5000",
    imageUrl: "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw69557eb0/images/hi-res/ess23416_red_1.jpg?sw=800&sh=1200"
  },
  {
    title: "Men's Every Wear Slim Fit Chino Pants - Goodfellow & Co™",
    description: "$35",
    imageUrl: "https://target.scene7.com/is/image/Target/GUEST_b0c569d7-203c-4ce9-a704-20a444845b7a?wid=1200&hei=1200&qlt=80&fmt=webp"
  },
  {
    title: "Friend 'You're My Lobster' Short-Sleeve T-Shirt",
    description: "$9.99",
    imageUrl: "https://target.scene7.com/is/image/Target/GUEST_d38a8e4c-079e-46e8-8b37-d41294aab5f0?wid=1200&hei=1200&qlt=80&fmt=webp"
  },
  
  {
    title: "Levi's Men's Long Sleeve Trucker Jacket",
    description: "$79.99",
    imageUrl: "https://target.scene7.com/is/image/Target/GUEST_6eb593ef-0e32-4c57-9a36-27df9a0becd4?wid=1200&hei=1200&qlt=80&fmt=webp"
  },
  {
    title: "Hanes Premium Men's Henley Pajama Shirt",
    description: "$9.98",
    imageUrl: "https://target.scene7.com/is/image/Target/GUEST_eeef5ba6-0b94-49f2-a8ed-deaa9fce7058?wid=600&hei=600&qlt=80&fmt=webp"
  },

];
const Product = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const showDrawer = (index) => {
    setIsDrawerVisible(true);
    const selected = cardData[index]; // Spesific card ki details
    setSelectedCard(selected);
    
  };
   const closeDrawer = () => {
    setIsDrawerVisible(false);
  };
  return (
    <div className="card-container">
      {cardData.map((data, index) => (
        <Card
          key={index}
          hoverable
          style={{
            width: 240,
            margin: '10px',
          }}
          cover={<img alt="example" src={data.imageUrl} />}
          actions={[
           <Button onClick={() => showDrawer(index)} type="primary" key="add-to-cart">
  Add to Cart
</Button>


          ]}
        >
          <Meta title={data.title} description={data.description} />
          <Draz isVisible={isDrawerVisible} closeDrawer={closeDrawer} selectedCard={selectedCard} />
          
        </Card>
      ))}
    </div>

  );
};
export default Product;