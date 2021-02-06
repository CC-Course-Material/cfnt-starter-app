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
              <img src={logo} style={{ height: 35, paddingLeft: 16 }} />
            </TopNav.Item>
            <TopNav.Item href="#">Get started</TopNav.Item>
            <TopNav.Item href="#">Components</TopNav.Item>
          </TopNav.Section>
          <TopNav.Section marginRight="major-2">
            <TopNav.Item>
              <Button variant="ghost" palette="primary">
                Sign up
              </Button>
            </TopNav.Item>
            <TopNav.Item>
              <Button palette="primary">Login</Button>
            </TopNav.Item>
          </TopNav.Section>
        </TopNav>
      }
      border="default"
    >
      {children}
    </PageWithHeader>
  );
};

export default Layout;
