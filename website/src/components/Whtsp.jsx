import React from 'react';
import { BackTop, Tooltip } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

const Whtsp = () => {
  return (
    <div>
      <BackTop>
        <div style={backTopStyle}>
          <Tooltip title="WhatsApp">
            <a href="whatsapp://send?text=Hello"      target="_blank"  rel="noreferrer">
              <WhatsAppOutlined style={iconStyle} />
            </a>
          </Tooltip>
        </div>
      </BackTop>
    </div>
  );
};

const backTopStyle = {
  position: 'fixed',
  bottom: 50,
  right: 50,
};

const iconStyle = {
  fontSize: '24px',
  color: '#25D366',
};

export default Whtsp;