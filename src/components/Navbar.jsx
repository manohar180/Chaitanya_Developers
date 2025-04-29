import React from 'react';
import { Box, Flex, Link, Button, Stack, useColorModeValue, IconButton, useColorMode } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaMoon, FaSun, FaHome } from 'react-icons/fa';

const Navbar = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue('brand.500', 'brand.200');

  return (
    <Box
      as="nav"
      bg={bgColor}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={borderColor}
      px={4}
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link
          as={RouterLink}
          to="/"
          fontSize="xl"
          fontWeight="bold"
          color="brand.500"
          _hover={{ textDecoration: 'none' }}
        >
          Chaitanya Developers
        </Link>

        <Stack direction={'row'} spacing={4} align="center">
          <Link as={RouterLink} to="/">
            <Button leftIcon={<FaHome />} variant="ghost">Home</Button>
          </Link>
          <Link as={RouterLink} to="/projects">
            <Button variant="ghost">Projects</Button>
          </Link>
          <Link as={RouterLink} to="/manage-plots">
            <Button variant="ghost">Manage Plots</Button>
          </Link>
          <Link as={RouterLink} to="/about">
            <Button variant="ghost">About</Button>
          </Link>
          <Link as={RouterLink} to="/contact">
            <Button variant="ghost">Contact</Button>
          </Link>
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
            color={iconColor}
            _hover={{ bg: 'transparent', transform: 'scale(1.1)' }}
          />
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar; 