import React from 'react';
import { Box, Heading } from 'bumbag';
import Layout from '../../components/Layout';

const LandingPage = () => {
  return (
    <Layout>
      <Box
        paddingY="major-20"
        paddingX="major-4"
        backgroundColor="secondary"
        color="white"
      >
        <Heading fontWeight="normal">
          Made to order coffee delivered to your workplace
        </Heading>
      </Box>
    </Layout>
  );
};

export default LandingPage;
