import React from 'react';
import { Menu, Layout } from 'antd';
import { UserOutlined, FormOutlined, MessageOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Sider } = Layout;

interface NavigationMenuProps {
  selectedKeys: string[];
  openKeys: string[];
  onMenuSelect: (selectedKeys: string[]) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  selectedKeys,
  openKeys,
  onMenuSelect,
  
}) => {
  const items2: MenuProps['items'] = [
    {
      key: 'calendar',
      icon: <UserOutlined />,
      label: 'Your Calendar',
    },
    {
      key: 'newJob',
      icon: <FormOutlined />,
      label: 'Post a New Job',
    },
    {
      key: 'messageBoard',
      icon: <MessageOutlined />,
      label: 'Message Board',
    },
  ];

  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={selectedKeys}
        defaultOpenKeys={openKeys}
        style={{ height: '100%', borderRight: 0 }}
        items={items2}
        onSelect={(item) => {
          onMenuSelect([item.key as string]);
         
        }}
      />
    </Sider>
  );
};

export default NavigationMenu;
