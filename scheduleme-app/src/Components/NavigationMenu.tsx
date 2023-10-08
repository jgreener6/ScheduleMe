import React from 'react';
import { Menu, Layout } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
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
  const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = `sub${index + 1}`;

      return {
        key,
        icon: React.createElement(icon),
        label: `Calender ${key}`,
        children: new Array(3).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey.toString(),
            label: `option${subKey}`,
          };
        }),
      };
    },
  );

  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={selectedKeys}
        defaultOpenKeys={openKeys}
        style={{ height: '100%', borderRight: 0 }}
        items={items2}
        onSelect={(item) => onMenuSelect([item.key as string])}
      />
    </Sider>
  );
};

export default NavigationMenu;
