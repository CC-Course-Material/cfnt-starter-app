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
  margin-top: 0;
  justify-content: center;
  padding: 24px;
  flex-direction: column;
`;

const CardContainer = styled(Flex)`
  box-sizing: border-box;
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
    fontSize: 64,
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
      <CardContainer marginY="major-10" marginX="10%">
        <Card>
          <i className="ti-wand ti" style={iconStyles} />
          <Text
            textAlign="center"
            marginY="16px"
            letterSpacing="2px"
            fontWeight="500"
          >
            MADE TO ORDER
          </Text>
          <Text textAlign="justify" fontSize="14px">
            Every cup of coffee we deliver is made to order by the brilliant
            baristas at all of our local shops. You can take control of your
            coffee, and get your favorite cup of joe, freshly made, only for
            you.
          </Text>
        </Card>
        <Card marginX="32px">
          <i className="ti-timer ti" style={iconStyles} />
          <Text
            textAlign="center"
            marginY="16px"
            letterSpacing="2px"
            fontWeight="500"
          >
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
          <Text
            textAlign="center"
            marginY="16px"
            letterSpacing="2px"
            fontWeight="500"
          >
            CONSTANT SUPPORT
          </Text>
          <Text textAlign="justify" fontSize="14px">
            We aim to please, and will go above and beyond to give the best
            customer service. If there is any way to improve your experience
            we'd love to hear about it.
          </Text>
        </Card>
      </CardContainer>
      <Flex paddingY="major-16" paddingX="10%" backgroundColor="#f8f8f8">
        <Flex
          flexWrap="wrap"
          flexDirection="row"
          maxWidth="800px"
          margin="auto"
        >
          <Box
            flex="2"
            minWidth="300px"
            paddingRight="32px"
            boxSizing="border-box"
            marginBottom="24px"
          >
            <Heading fontSize="500" fontWeight="300" marginBottom="24px">
              Order today
            </Heading>
            <Text>
              We are only working with a handful of clients to ensure that our
              service exceeds expectations. Be part of the modern way to get
              coffee. With Caffeinate, you can get your favorite coffee, any
              time, anywhere. Order now.
            </Text>
          </Box>

          <Flex
            backgroundColor={theme.palette.primary}
            flex="1"
            minWidth="300px"
            height="338px"
            alignItems="center"
            flexDirection="column"
            color="white"
          >
            <Heading
              marginTop="56px"
              fontFamily="Lato"
              fontWeight="300"
              fontSize="900"
            >
              $2
            </Heading>
            <Text fontFamily="Lato" marginBottom="20px">
              Fee Per Cup
            </Text>
            <Button palette="primary" variant="outlined">
              Join now
            </Button>
            <Text fontFamily="Lato" marginTop="20px">
              Tip included
            </Text>
          </Flex>
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

export default LandingPage;
