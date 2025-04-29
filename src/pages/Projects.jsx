import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const Projects = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const cardBgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box bg={bgColor} minH="100vh" py={16}>
      <Container maxW="container.xl">
        <Heading
          textAlign="center"
          mb={12}
          color="green.600"
          fontSize={{ base: '3xl', md: '4xl' }}
        >
          Our Projects
        </Heading>

        <Tabs variant="enclosed" colorScheme="green">
          <TabList>
            <Tab>Projects Overview</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {[
                  {
                    id: 'siddavanam',
                    name: 'Siddavanam',
                    description: 'A premium Red Sandalwood project featuring 500 meticulously planned plots in a serene environment.',
                    image: '/images/red-sandalwood-1.jpg',
                  },
                  {
                    id: 'green-valley',
                    name: 'Green Valley',
                    description: 'Experience the beauty of nature with our Green Valley project. 500 plots designed for sustainable Red Sandalwood cultivation.',
                    image: '/images/red-sandalwood-2.jpg',
                  }
                ].map((project, index) => (
                  <MotionBox
                    key={project.id}
                    bg={cardBgColor}
                    borderRadius="xl"
                    overflow="hidden"
                    shadow="xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    _hover={{ transform: 'translateY(-5px)', transition: 'all 0.2s' }}
                    border="2px"
                    borderColor="green.200"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      h="300px"
                      w="100%"
                      objectFit="cover"
                      fallbackSrc="https://via.placeholder.com/600x300"
                    />
                    <Box p={6}>
                      <Heading size="lg" mb={3} color="green.600">
                        {project.name}
                      </Heading>
                      <Text mb={4} color={textColor}>
                        {project.description}
                      </Text>
                      <Button
                        as={RouterLink}
                        to={`/manage-plots?project=${project.id}`}
                        colorScheme="green"
                        size="lg"
                        width="100%"
                        _hover={{
                          bg: 'green.600',
                          transform: 'translateY(-2px)',
                          boxShadow: 'lg'
                        }}
                      >
                        View Plots
                      </Button>
                    </Box>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default Projects; 