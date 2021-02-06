import React from 'react';
import { PageWithHeader, TopNav, Button } from 'bumbag';
import logo from '../static/logo.png';

const Layout = ({ children }) => {
  return (
    <PageWithHeader
      header={
        <TopNav>
          <TopNav.Section>
            <TopNav.Item fontWeight="semibold">
              <img src={logo} style={{ height: 35, marginLeft: '1rem' }} />
            </TopNav.Item>
          </TopNav.Section>
          <TopNav.Section marginRight="major-2">
            <TopNav.Item>
              <Button variant="ghost" palette="primary">
                Sign up
              </Button>
            </TopNav.Item>
            <TopNav.Item>
              <Button palette="primary" style={{ color: 'white' }}>
                Login
              </Button>
            </TopNav.Item>
          </TopNav.Section>
        </TopNav>
      }
      border="none"
    >
      {children}
    </PageWithHeader>
  );
};

export default Layout;
