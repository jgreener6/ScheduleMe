import React, { useState } from 'react';
import { Layout } from 'antd';
import './App.css';
import NavigationMenu from './Components/NavigationMenu';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState(['1']);
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const handleMenuSelect = (selectedKeys: string[]) => {
    setSelectedKeys(selectedKeys);
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        {/* Header content here */}
      </Header>
      <Layout>
        <NavigationMenu
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onMenuSelect={handleMenuSelect}
        />
        <Layout style={{ padding: '0 24px 24px' }}>
          {/* Breadcrumb and Content here */}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
