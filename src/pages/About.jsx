import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, useColorModeValue, List, ListItem, ListIcon, Divider, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUserTie } from 'react-icons/fa';

const MotionBox = motion(Box);

const About = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box py={12}>
      <Container maxW="container.xl">
        {/* Company Vision Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          mb={16}
        >
          <Heading
            textAlign="center"
            mb={8}
            color="brand.600"
            fontSize={{ base: '3xl', md: '4xl' }}
          >
            Our Vision
          </Heading>
          <Text
            fontSize="xl"
            textAlign="center"
            maxW="3xl"
            mx="auto"
            color={textColor}
          >
            At Chaitanya Developers, we envision creating sustainable and profitable
            investment opportunities through the cultivation of Red Sandalwood. Our
            mission is to preserve this precious natural resource while providing
            our investors with exceptional returns.
          </Text>
        </MotionBox>

        {/* Company Information */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          mb={16}
        >
          <Heading
            textAlign="center"
            mb={8}
            color="brand.600"
            fontSize={{ base: '2xl', md: '3xl' }}
          >
            About Chaitanya Developers
          </Heading>
          <Text
            fontSize="lg"
            textAlign="center"
            maxW="3xl"
            mx="auto"
            color={textColor}
            mb={8}
          >
            Chaitanya Developers, based in Guntur, Andhra Pradesh, is a leading real estate
            development company specializing in Red Sandalwood cultivation projects. With
            years of experience in the industry, we have established ourselves as trusted
            partners for sustainable and profitable agricultural investments.
          </Text>
        </MotionBox>

        {/* Managing Director Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          mb={16}
        >
          <VStack spacing={6} align="center">
            <Box
              p={6}
              bg={bgColor}
              borderRadius="xl"
              borderWidth={1}
              borderColor={borderColor}
              maxW="2xl"
              textAlign="center"
            >
              <IconButton
                icon={<FaUserTie />}
                aria-label="Managing Director"
                size="lg"
                colorScheme="brand"
                mb={4}
              />
              <Heading size="lg" mb={4} color="brand.500">
                Vanukuri Chinna Subba Reddy
              </Heading>
              <Text fontSize="lg" color={textColor} mb={4}>
                Managing Director
              </Text>
              <Text color={textColor}>
                With over two decades of experience in real estate and agricultural
                development, Mr. Vanukuri Chinna Subba Reddy leads Chaitanya Developers
                with a vision of sustainable growth and community development. His
                expertise in Red Sandalwood cultivation and commitment to ethical
                business practices has made Chaitanya Developers a trusted name in
                the industry.
              </Text>
            </Box>
          </VStack>
        </MotionBox>

        {/* Red Sandalwood Information */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={16}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VStack
              align="start"
              spacing={6}
              p={8}
              bg={bgColor}
              borderRadius="xl"
              borderWidth={1}
              borderColor={borderColor}
              h="100%"
            >
              <Heading size="lg" color="brand.500">
                About Red Sandalwood
              </Heading>
              <Text color={textColor}>
                Red Sandalwood (Pterocarpus santalinus) is one of the most valuable
                trees in the world, known for its rich red color and numerous
                applications in traditional medicine and luxury furniture.
              </Text>
              <Text color={textColor}>
                Native to the Southern parts of Eastern Ghats in India, this rare
                species is protected under CITES (Convention on International Trade
                in Endangered Species) and requires special permits for cultivation.
              </Text>
              
              <Heading size="md" color="brand.500">
                Key Advantages
              </Heading>
              <List spacing={3}>
                <ListItem color={textColor}>
                  <ListIcon as={FaCheckCircle} color="brand.500" />
                  High Market Value: Red Sandalwood is one of the most expensive woods in the world, with prices reaching up to $20,000 per cubic meter.
                </ListItem>
                <ListItem color={textColor}>
                  <ListIcon as={FaCheckCircle} color="brand.500" />
                  Medicinal Properties: Used in traditional medicine for treating various ailments, including skin diseases and digestive issues.
                </ListItem>
                <ListItem color={textColor}>
                  <ListIcon as={FaCheckCircle} color="brand.500" />
                  Aromatic Qualities: The wood produces a distinctive, pleasant fragrance that makes it highly sought after for incense and perfumes.
                </ListItem>
                <ListItem color={textColor}>
                  <ListIcon as={FaCheckCircle} color="brand.500" />
                  Durable Material: Known for its exceptional durability and resistance to termites, making it ideal for high-end furniture and carvings.
                </ListItem>
                <ListItem color={textColor}>
                  <ListIcon as={FaCheckCircle} color="brand.500" />
                  Investment Security: Due to its protected status and increasing rarity, Red Sandalwood represents a secure long-term investment.
                </ListItem>
                <ListItem color={textColor}>
                  <ListIcon as={FaCheckCircle} color="brand.500" />
                  Environmental Benefits: The cultivation of Red Sandalwood contributes to biodiversity and helps in maintaining ecological balance.
                </ListItem>
                <ListItem color={textColor}>
                  <ListIcon as={FaCheckCircle} color="brand.500" />
                  Global Demand: Increasing international demand for Red Sandalwood products ensures a stable and growing market.
                </ListItem>
                <ListItem color={textColor}>
                  <ListIcon as={FaCheckCircle} color="brand.500" />
                  Tax Benefits: Agricultural investments in Red Sandalwood cultivation may qualify for various tax benefits and subsidies.
                </ListItem>
                <ListItem color={textColor}>
                  <ListIcon as={FaCheckCircle} color="brand.500" />
                  Low Maintenance: Once established, Red Sandalwood trees require minimal maintenance and care.
                </ListItem>
                <ListItem color={textColor}>
                  <ListIcon as={FaCheckCircle} color="brand.500" />
                  Long-term Returns: With proper cultivation, Red Sandalwood can provide significant returns over a 15-20 year period.
                </ListItem>
              </List>
            </VStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://greenparadiselive.com/cdn/shop/files/red_sandalwoodpan_3.png?v=1729404927&width=1920"
              alt="Red Sandalwood Tree"
              borderRadius="xl"
              w="100%"
              h="100%"
              objectFit="cover"
              fallbackSrc="https://via.placeholder.com/600x400?text=Red+Sandalwood"
            />
          </MotionBox>
        </SimpleGrid>

        {/* Company Values */}
        <Heading
          textAlign="center"
          mb={8}
          color="brand.600"
          fontSize={{ base: '2xl', md: '3xl' }}
        >
          Our Values
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {values.map((value, index) => (
            <MotionBox
              key={value.title}
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
                <Heading size="md" mb={4} color="brand.500">
                  {value.title}
                </Heading>
                <Text color={textColor}>
                  {value.description}
                </Text>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const values = [
  {
    title: 'Sustainability',
    description:
      'We are committed to sustainable cultivation practices that protect and preserve the environment for future generations.',
  },
  {
    title: 'Transparency',
    description:
      'We maintain complete transparency in our operations, ensuring our investors have clear insights into their investments.',
  },
  {
    title: 'Excellence',
    description:
      'We strive for excellence in everything we do, from plot selection to customer service and investment management.',
  },
];

export default About; 