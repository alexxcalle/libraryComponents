import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const App: React.FC = () => (
  <Card
    hoverable
    style={{ width: 475 }}
    cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Fj0zoSD0e4V7siSTI221US9cMrtjc8A2og&s" />}
  >
    <Meta title="REACT GRAHQL DEVELOP FOR ANY DEVELOPMENT" description="Best one bars to take friends and relatives, one bars to take friends and relatives" />
  </Card>
);

export default App;