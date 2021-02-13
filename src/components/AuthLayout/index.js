import React from 'react';
import { Box, Flex, Button, Heading } from 'bumbag';
import Layout from '../Layout';

const AuthLayout = ({ children, buttonText, title }) => {
  return (
    <Layout border="none">
      <Flex flex="1" justifyContent="center" marginTop="3%">
        <Flex
          padding="major-3"
          maxWidth="300px"
          width="100%"
          alignItems="center"
          flexDirection="column"
        >
          <Heading use="h3">{title}</Heading>
          {children}
          <Button palette="primary" width="100%" color="white">
            {buttonText}
          </Button>
        </Flex>
      </Flex>
      <Box
        paddingY="major-5"
        paddingX="5%"
        backgroundColor="secondary"
        color="white"
      >
        {`© Copyright ${new Date().getFullYear()} - Caffeinate`}
      </Box>
    </Layout>
  );
};

export default AuthLayout;
