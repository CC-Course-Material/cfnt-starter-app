import React from 'react';
import {
  Box,
  Heading,
  Button,
  Flex,
  styled,
  css,
  breakpoint,
  useTheme,
  Text,
} from 'bumbag';
import Layout from '../../components/Layout';

const Card = styled(Flex)`
  background-color: #f8f8f8;
  flex: 1;
  margin: 16px;
  margin-top: 0;
  min-width: 200px;
  justify-content: center;
  padding: 24px;
  flex-direction: column;
`;

const CardContainer = styled(Flex)`
  ${breakpoint(
    'max-tablet',
    css`
      flex-direction: column;
    `
  )}
`;

const LandingPage = () => {
  const { theme } = useTheme();

  const iconStyles = {
    color: theme.palette.primary,
    fontSize: 48,
    textAlign: 'center',
  };

  return (
    <Layout>
      <Box
        paddingY="major-17"
        paddingX="10%"
        backgroundColor="secondary"
        color="white"
      >
        <Heading fontWeight="300" fontSize="600">
          Made to order coffee <br /> delivered to your workplace
        </Heading>
        <Heading
          fontWeight="600"
          fontSize="300"
          letterSpacing="500"
          marginY="major-4"
        >
          Sign up now
        </Heading>
        <Button palette="primary" style={{ color: 'white' }}>
          Sign up
        </Button>
      </Box>
      <CardContainer
        marginY="major-10"
        width="100%"
        maxWidth="1000px"
        marginX="auto"
      >
        <Card>
          <i className="ti-wand ti" style={iconStyles} />
          <Text textAlign="center" marginY="16px">
            MADE TO ORDER
          </Text>
          <Text textAlign="justify" fontSize="14px">
            Every cup of coffee we deliver is made to order by the brilliant
            baristas at all of our local shops. You can take control of your
            coffee, and get your favorite cup of joe, freshly made, only for
            you.
          </Text>
        </Card>
        <Card>
          <i className="ti-timer ti" style={iconStyles} />
          <Text textAlign="center" marginY="16px">
            PROMPT DELIVERY
          </Text>
          <Text textAlign="justify" fontSize="14px">
            We deliver as early as 6:00 am to your workplace. Currently, we only
            deliver to San Francisco, Daly City, Millbrae and Burlingame. We're
            working to expand our reach to Los Angeles and Seattle.
          </Text>
        </Card>

        <Card>
          <i className="ti-comments ti" style={iconStyles} />
          <Text textAlign="center" marginY="16px">
            CONSTANT SUPPORT
          </Text>
          <Text textAlign="justify" fontSize="14px">
            We aim to please, and will go above and beyond to give the best
            customer service. If there is any way to improve your experience
            we'd love to hear about it.
          </Text>
        </Card>
      </CardContainer>
    </Layout>
  );
};

export default LandingPage;
