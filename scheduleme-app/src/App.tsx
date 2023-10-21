import React, { useState } from 'react';
import { Layout } from 'antd';
import './App.css';
import NavigationMenu from './Components/NavigationMenu';
import CalendarComponent from './Components/Calendar';
import JobPostingForm from './Components/JobPostingForm';
import MessageBoardComponent from './Components/MessageBoardComponent';
import OverviewDashboard from './Components/OverviewDashboard';
import AuthenticationAndRegistration from './Components/AuthenticationAndRegristration'; // Import the AuthenticationAndRegistration component

const { Header, Content } = Layout;

const App: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['1']);
  const [openKeys, setOpenKeys] = useState<string[]>(['sub1']);
  const [showJobPostingForm, setShowJobPostingForm] = useState<boolean>(false);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // State to track user authentication

  const handleMenuSelect = (selectedKeys: string[]) => {
    setSelectedKeys(selectedKeys);

    if (selectedKeys.includes('calendar')) {
      setSelectedComponent('calendar');
    } else if (selectedKeys.includes('newJob')) {
      setSelectedComponent('newJob');
    } else if (selectedKeys.includes('messageBoard')) {
      setSelectedComponent('messageBoard');
    }
  };

  const handleShowJobPostingForm = () => {
    setShowJobPostingForm(true);
  };

  // Simple authentication handling (for demonstration purposes)
  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        {/* You can add header content or a logo here */}
      </Header>
      <Layout>
        {!isAuthenticated ? (
          <Content style={{ padding: '0 24px 24px' }}>
            {/* Display the AuthenticationAndRegistration component when not authenticated */}
            <AuthenticationAndRegistration onLogin={handleAuthentication} />
          </Content>
        ) : (
          <>
            <NavigationMenu
              selectedKeys={selectedKeys}
              openKeys={openKeys}
              onMenuSelect={handleMenuSelect}
            />
            <Layout style={{ padding: '0 24px 24px' }}>
              {selectedComponent === 'calendar' && <CalendarComponent />}
              {selectedComponent === 'newJob' && <JobPostingForm />}
              {selectedComponent === 'messageBoard' && <MessageBoardComponent />}
              {!selectedComponent && <OverviewDashboard />}
            </Layout>
          </>
        )}
      </Layout>
    </Layout>
  );
};

export default App;
