import React from 'react';
import { Box, Container, Stack, Text, Link, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt={8}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Stack direction={'row'} spacing={6}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/projects">Projects</Link>
          <Link as={RouterLink} to="/manage-plots">Manage Plots</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </Stack>
        <Text>© 2024 Chaitanya Developers. All rights reserved</Text>
      </Container>
    </Box>
  );
};

export default Footer; 