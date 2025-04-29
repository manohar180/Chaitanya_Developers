import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
  },
  colors: {
    brand: {
      50: '#e6f6f5',
      100: '#b2e4e0',
      200: '#7fd2cc',
      300: '#4cbfb7',
      400: '#19ada3',
      500: '#00897b',
      600: '#006b60',
      700: '#004d45',
      800: '#002f2a',
      900: '#00110f',
    },
    accent: {
      50: '#fff8e1',
      100: '#ffecb3',
      200: '#ffe082',
      300: '#ffd54f',
      400: '#ffca28',
      500: '#ffc107',
      600: '#ffb300',
      700: '#ffa000',
      800: '#ff8f00',
      900: '#ff6f00',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'neutral.900' : 'neutral.50',
        color: props.colorMode === 'dark' ? 'neutral.100' : 'neutral.800',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'lg',
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.400' : 'brand.500',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.300' : 'brand.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        }),
        outline: (props) => ({
          borderColor: props.colorMode === 'dark' ? 'brand.400' : 'brand.500',
          color: props.colorMode === 'dark' ? 'brand.400' : 'brand.500',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.900' : 'brand.50',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        }),
        accent: (props) => ({
          bg: props.colorMode === 'dark' ? 'accent.600' : 'accent.500',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'accent.500' : 'accent.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        }),
      },
    },
    Card: {
      baseStyle: (props) => ({
        container: {
          bg: props.colorMode === 'dark' ? 'neutral.800' : 'white',
          borderRadius: 'xl',
          boxShadow: 'xl',
          transition: 'all 0.3s ease-in-out',
          _hover: {
            transform: 'translateY(-5px)',
            boxShadow: '2xl',
          },
        },
      }),
    },
    Heading: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'neutral.100' : 'neutral.800',
      }),
    },
    Text: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'neutral.300' : 'neutral.600',
      }),
    },
  },
});

export default theme; 