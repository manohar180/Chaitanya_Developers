import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  Text,
  SimpleGrid,
  Icon,
  useColorModeValue,
  HStack,
  AspectRatio,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Store in localStorage for demo purposes
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      id: Date.now(),
      date: new Date().toISOString(),
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    // Reset form and show success message
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setIsSubmitting(false);

    toast({
      title: 'Message Sent!',
      description: "We'll get back to you as soon as possible.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box py={12}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {/* Contact Form */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VStack
              as="form"
              onSubmit={handleSubmit}
              spacing={6}
              align="stretch"
              p={8}
              bg={bgColor}
              borderRadius="xl"
              borderWidth={1}
              borderColor={borderColor}
            >
              <Heading size="lg" color="brand.600">
                Get in Touch
              </Heading>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="brand"
                size="lg"
                isLoading={isSubmitting}
              >
                Send Message
              </Button>
            </VStack>
          </MotionBox>

          {/* Contact Information */}
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VStack
              spacing={8}
              align="stretch"
              p={8}
              bg={bgColor}
              borderRadius="xl"
              borderWidth={1}
              borderColor={borderColor}
              h="100%"
            >
              <Heading size="lg" color="brand.600">
                Contact Information
              </Heading>
              <VStack spacing={6} align="stretch">
                <Box>
                  <ContactInfo
                    icon={FaPhone}
                    title="Phone"
                    content="+91 9866647408"
                  />
                </Box>
                <Box>
                  <ContactInfo
                    icon={FaEnvelope}
                    title="Email"
                    content="info@chaitanyadevelopers.com"
                  />
                </Box>
                <Box>
                  <ContactInfo
                    icon={FaMapMarkerAlt}
                    title="Address"
                    content="Brodipet 4/15, Guntur, Andhra Pradesh"
                  />
                </Box>
              </VStack>
              <Text color={useColorModeValue('gray.600', 'gray.300')} mt={4}>
                Feel free to reach out to us for any inquiries about our Red
                Sandalwood projects. Our team is here to assist you with your
                investment journey.
              </Text>
              <AspectRatio ratio={16/9} borderRadius="xl" overflow="hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.123456789012!2d80.12345678901234!3d16.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35a1234567890%3A0x1234567890abcdef!2sBrodipet%204%2F15%2C%20Guntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                  title="Chaitanya Developers Location"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </AspectRatio>
            </VStack>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const ContactInfo = ({ icon, title, content }) => {
  return (
    <Box>
      <HStack spacing={4}>
        <Icon as={icon} boxSize={5} color="brand.500" />
        <VStack align="start" spacing={1}>
          <Text fontWeight="bold" color="brand.500">
            {title}
          </Text>
          <Text color={useColorModeValue('gray.600', 'gray.300')}>
            {content}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Contact; 