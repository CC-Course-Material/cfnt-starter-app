import React from 'react';
import { PageWithHeader, TopNav, Button } from 'bumbag';
import { Link } from 'react-router-dom';
import logo from '../../static/logo.png';

const Layout = ({ children }) => {
  return (
    <PageWithHeader
      display="flex"
      flexDirection="column"
      header={
        <TopNav>
          <TopNav.Section>
            <TopNav.Item fontWeight="semibold">
              <Link to="/" style={{ textDecoration: 'none', display: 'flex' }}>
                <img src={logo} style={{ height: 35, marginLeft: '1rem' }} />
              </Link>
            </TopNav.Item>
          </TopNav.Section>
          <TopNav.Section marginRight="major-2">
            <TopNav.Item>
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                <Button variant="ghost" palette="primary">
                  Sign up
                </Button>
              </Link>
            </TopNav.Item>
            <TopNav.Item>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button palette="primary" color="white">
                  Login
                </Button>
              </Link>
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
