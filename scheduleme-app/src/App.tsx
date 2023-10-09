import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import './App.css';
import NavigationMenu from './Components/NavigationMenu';
import CalendarComponent from './Components/Calendar'; // Import your calendar component
import JobPostingForm from './Components/JobPostingForm'; // Import the JobPostingForm component

const { Header, Content } = Layout;

const App: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['1']);
  const [openKeys, setOpenKeys] = useState<string[]>(['sub1']);
  const [showJobPostingForm, setShowJobPostingForm] = useState<boolean>(false);

  const [selectedComponent, setSelectedComponent] = useState<string | null>(null); // Declare selectedComponent

  const handleMenuSelect = (selectedKeys: string[]) => {
    setSelectedKeys(selectedKeys);
    
    // Determine which component to display based on the selected menu option
    if (selectedKeys.includes('calendar')) {
      setSelectedComponent('calendar');
    } else if (selectedKeys.includes('newJob')) {
      setSelectedComponent('newJob');
    } else {
      setSelectedComponent(null); // Handle other menu options here
    }
  };

  const handleShowJobPostingForm = () => {
    setShowJobPostingForm(true);
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
  
      </Header>
      <Layout>
        <NavigationMenu
          selectedKeys={selectedKeys}
          openKeys={openKeys}
          onMenuSelect={handleMenuSelect}
        />
        <Layout style={{ padding: '0 24px 24px' }}>
          {selectedComponent === 'calendar' && <CalendarComponent />}
          {selectedComponent === 'newJob' && <JobPostingForm />} {/* Render JobPostingForm */}
          {/* Add other components based on the selected menu option */}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
