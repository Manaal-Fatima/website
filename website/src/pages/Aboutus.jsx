import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

const Aboutus = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Card title="About Us" style={{ width: 400 }}>
        <Title level={3}>Our Story</Title>
        <Text>
         bla bla bla bla
         
        </Text>

        <Title level={3}>Our Mission</Title>
        <Text>
         Bla BLa BLA BLA 
        </Text>
      </Card>
    </div>
  );
};

export default Aboutus;

