import React, { useState } from 'react';
import {  SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Menu, Drawer } from 'antd';

const items = [
  {
    label: '',
    key: 'mail',
    icon:  <img src="./logo.jpeg" 
    alt="Logo" 
    style={{ width: '50px' }}
    />,
  },
  {
    label: 'Assesories',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'women',
        children: [
          {
            label: 'Unstiched dresses',
            key: 'setting:1',
          },
          {
            label: 'Ready-made shirts',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'MEN',
        children: [
          {
            label: 'T-shirts',
            key: 'setting:3',
          },
          {
            label: 'Jeans',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: 'cart',
    key: 'hi',
    icon: <ShoppingCartOutlined />, 
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const [cartVisible, setCartVisible] = useState(false);


  const showCartDrawer = () => {
    setCartVisible(true);
    
  };
const onCloseCartDrawer = () => {
    setCartVisible(false);
  };
 const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    if (e.key === 'hi') {
      showCartDrawer(); // Show the cart drawer when the "Your Cart" label is clicked
    }
  };

  return (
    <div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

      <Drawer
        title="Your Cart"
        placement="top"
        closable={true}
        onClose={onCloseCartDrawer}
        open={cartVisible}
      >
      
      </Drawer>
    </div>
  );
};

export default Navbar;