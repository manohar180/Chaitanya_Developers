import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, useColorModeValue, List, ListItem, ListIcon, Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaChartLine, FaTree, FaHandshake, FaShieldAlt, FaMoneyBillWave, FaLeaf, FaGlobe, FaLock } from 'react-icons/fa';

const MotionBox = motion(Box);

const Home = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, brand.700, brand.800)"
        color="white"
        py={20}
        textAlign="center"
      >
        <Container maxW="container.xl">
          <Heading
            fontSize={{ base: '4xl', md: '6xl' }}
            mb={6}
            color="white"
            textShadow="0 2px 4px rgba(0,0,0,0.2)"
          >
            Invest in Red Sandalwood
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            maxW="2xl"
            mx="auto"
            mb={8}
            color="white"
            opacity={0.9}
          >
            Secure your future with sustainable and profitable Red Sandalwood cultivation
          </Text>
          <Button
            size="lg"
            colorScheme="whiteAlpha"
            variant="solid"
            onClick={() => window.location.href = '/projects'}
            _hover={{
              bg: 'white',
              color: 'brand.700',
              transform: 'translateY(-2px)',
              boxShadow: 'lg'
            }}
            transition="all 0.2s"
          >
            Explore Projects
          </Button>
        </Container>
      </Box>

      {/* Investment Benefits */}
      <Box py={16}>
        <Container maxW="container.xl">
          <Heading
            textAlign="center"
            mb={12}
            color="brand.600"
          >
            Why Invest in Red Sandalwood?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {benefits.map((benefit, index) => (
              <MotionBox
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box
                  p={6}
                  bg={bgColor}
                  borderRadius="xl"
                  borderWidth={1}
                  borderColor={borderColor}
                  height="100%"
                >
                  <Flex
                    align="center"
                    justify="center"
                    mb={4}
                  >
                    {benefit.icon}
                  </Flex>
                  <Heading size="md" mb={4} color="brand.500">
                    {benefit.title}
                  </Heading>
                  <Text color={textColor}>
                    {benefit.description}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Market Potential */}
      <Box py={16} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://greenparadiselive.com/cdn/shop/files/red_sandalwoodpan_3.png?v=1729404927&width=1920"
                alt="Red Sandalwood Market"
                borderRadius="xl"
                w="100%"
                h="100%"
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/600x400?text=Red+Sandalwood"
              />
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <VStack align="start" spacing={6}>
                <Heading color="brand.600">
                  Market Potential
                </Heading>
                <Text fontSize="lg" color={textColor}>
                  The global Red Sandalwood market is experiencing unprecedented growth:
                </Text>
                <List spacing={3}>
                  <ListItem color={textColor}>
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    Current market value: $20,000 per cubic meter
                  </ListItem>
                  <ListItem color={textColor}>
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    Annual growth rate: 15-20%
                  </ListItem>
                  <ListItem color={textColor}>
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    Increasing demand from China, Japan, and Middle Eastern countries
                  </ListItem>
                  <ListItem color={textColor}>
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    Limited supply due to CITES regulations
                  </ListItem>
                  <ListItem color={textColor}>
                    <ListIcon as={FaCheckCircle} color="brand.500" />
                    Growing applications in medicine, cosmetics, and luxury goods
                  </ListItem>
                </List>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Investment Process */}
      <Box py={16}>
        <Container maxW="container.xl">
          <Heading
            textAlign="center"
            mb={12}
            color="brand.600"
          >
            Investment Process
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
            {processSteps.map((step, index) => (
              <MotionBox
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box
                  p={6}
                  bg={bgColor}
                  borderRadius="xl"
                  borderWidth={1}
                  borderColor={borderColor}
                  height="100%"
                  textAlign="center"
                >
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color="brand.500"
                    mb={2}
                  >
                    {index + 1}
                  </Text>
                  <Heading size="md" mb={4} color="brand.500">
                    {step.title}
                  </Heading>
                  <Text color={textColor}>
                    {step.description}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        bgGradient="linear(to-r, brand.700, brand.800)"
        color="white"
        py={16}
        textAlign="center"
      >
        <Container maxW="container.xl">
          <Heading
            fontSize={{ base: '3xl', md: '4xl' }}
            mb={6}
            color="white"
            textShadow="0 2px 4px rgba(0,0,0,0.2)"
          >
            Ready to Invest?
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            maxW="2xl"
            mx="auto"
            mb={8}
            color="white"
            opacity={0.9}
          >
            Join us in creating a sustainable future while securing your financial growth
          </Text>
          <Button
            size="lg"
            colorScheme="whiteAlpha"
            variant="solid"
            onClick={() => window.location.href = '/contact'}
            _hover={{
              bg: 'white',
              color: 'brand.700',
              transform: 'translateY(-2px)',
              boxShadow: 'lg'
            }}
            transition="all 0.2s"
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

const benefits = [
  {
    title: 'High Returns',
    description: 'Red Sandalwood offers exceptional returns on investment, with prices increasing steadily due to limited supply and growing demand. Current market value exceeds ₹20,000 per kg.',
    icon: <FaChartLine size={40} color="#4A5568" />,
  },
  {
    title: 'Sustainable Investment',
    description: 'Our cultivation practices ensure environmental sustainability while providing long-term financial security. Red Sandalwood trees help in carbon sequestration and soil conservation.',
    icon: <FaTree size={40} color="#4A5568" />,
  },
  {
    title: 'Expert Guidance',
    description: 'Benefit from our extensive experience in Red Sandalwood cultivation and market expertise. We provide complete support throughout the investment journey.',
    icon: <FaHandshake size={40} color="#4A5568" />,
  },
  {
    title: 'Legal Protection',
    description: 'Red Sandalwood is protected under CITES (Convention on International Trade in Endangered Species), ensuring legal protection and controlled trade, which maintains its high value.',
    icon: <FaShieldAlt size={40} color="#4A5568" />,
  },
  {
    title: 'Multiple Revenue Streams',
    description: 'Generate income from various sources including wood, oil, and medicinal products. The tree\'s heartwood, leaves, and roots all have commercial value.',
    icon: <FaMoneyBillWave size={40} color="#4A5568" />,
  },
  {
    title: 'Low Maintenance',
    description: 'Red Sandalwood requires minimal maintenance once established. It\'s drought-resistant and naturally pest-resistant, reducing cultivation costs.',
    icon: <FaLeaf size={40} color="#4A5568" />,
  },
  {
    title: 'Global Demand',
    description: 'Strong international demand from China, Japan, and Middle Eastern countries. The market is growing at 15-20% annually due to increasing applications.',
    icon: <FaGlobe size={40} color="#4A5568" />,
  },
  {
    title: 'Long-term Security',
    description: 'Investment in Red Sandalwood provides a hedge against inflation and market volatility. The 15-year growth period ensures stable, long-term returns.',
    icon: <FaLock size={40} color="#4A5568" />,
  },
];

const processSteps = [
  {
    title: 'Select Plot',
    description: 'Choose from our premium plots in prime locations for Red Sandalwood cultivation.',
  },
  {
    title: 'Planting',
    description: 'Our experts handle the planting process using high-quality saplings and best practices.',
  },
  {
    title: 'Maintenance',
    description: 'We provide comprehensive maintenance services to ensure optimal growth.',
  },
  {
    title: 'Harvest & Returns',
    description: 'After 15 years, harvest your investment with significant returns.',
  },
];

export default Home; 