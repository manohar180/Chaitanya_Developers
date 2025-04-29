import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Input,
  Select,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Text,
  Tooltip,
  useToast,
  HStack,
  useColorModeValue,
  VStack,
  Image,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPlots, updatePlot, initializePlots, API_URL } from '../services/api';

const MotionBox = motion(Box);

const PLOT_STATUS = {
  AVAILABLE: 'available',
  SOLD: 'sold',
  BOOKED: 'booked',
};

const STATUS_COLORS = {
  [PLOT_STATUS.AVAILABLE]: 'green.300',
  [PLOT_STATUS.SOLD]: 'red.300',
  [PLOT_STATUS.BOOKED]: 'yellow.300',
};

const projects = [
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
];

const ManagePlots = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const projectId = searchParams.get('project');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { isOpen: isPlotModalOpen, onOpen: onPlotModalOpen, onClose: onPlotModalClose } = useDisclosure();
  const [plots, setPlots] = useState([]);
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [plotCount, setPlotCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  // Update color mode values
  const bgColor = useColorModeValue('white', 'gray.800');
  const cardBgColor = useColorModeValue('white', 'gray.800');
  const cardBorderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headerBgColor = useColorModeValue('green.50', 'green.900');
  const buttonBgColor = useColorModeValue('green.400', 'green.500');
  const buttonHoverColor = useColorModeValue('green.500', 'green.600');

  useEffect(() => {
    if (projectId) {
      const loadPlots = async () => {
        try {
          const plots = await getPlots(projectId);
          if (plots.length === 0) {
            // Initialize plots if none exist
            const totalPlots = projectId === 'heritage-woods' ? 300 : 500;
            await initializePlots(projectId, totalPlots);
            const initializedPlots = await getPlots(projectId);
            setPlots(initializedPlots);
          } else {
            setPlots(plots);
          }
        } catch (error) {
          toast({
            title: 'Error',
            description: 'Failed to load plots',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        }
      };

      loadPlots();
    }
  }, [projectId]);

  const handlePlotClick = (plot) => {
    setSelectedPlot(plot);
    onOpen();
  };

  const handleUpdatePlot = async (updatedPlot) => {
    try {
      await updatePlot(updatedPlot._id, updatedPlot);
      const updatedPlots = plots.map((plot) =>
        plot._id === updatedPlot._id ? updatedPlot : plot
      );
      setPlots(updatedPlots);
      onClose();
      toast({
        title: 'Plot Updated',
        description: `Plot ${updatedPlot.plotId} has been updated successfully.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update plot',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleAddPlots = () => {
    const newPlots = Array.from({ length: plotCount }, (_, index) => ({
      projectId: projectId,
      plotId: plots.length + index + 1,
      status: PLOT_STATUS.AVAILABLE,
      boughtBy: '',
      soldBy: '',
    }));
    
    // Send new plots to the backend
    const addPlotsToBackend = async () => {
      try {
        for (const plot of newPlots) {
          await fetch(`${API_URL}/plots`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(plot),
          });
        }
        
        // Refresh the plots list
        const updatedPlots = await getPlots(projectId);
        setPlots(updatedPlots);
        
        onPlotModalClose();
        toast({
          title: 'Plots Added',
          description: `${plotCount} new plots have been added successfully.`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to add plots',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };

    addPlotsToBackend();
  };

  const handleRemovePlots = () => {
    if (plotCount > plots.length) {
      toast({
        title: 'Error',
        description: 'Cannot remove more plots than available.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const updatedPlots = plots.slice(0, -plotCount);
    setPlots(updatedPlots);
    onPlotModalClose();
    toast({
      title: 'Plots Removed',
      description: `${plotCount} plots have been removed successfully.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const filteredPlots = plots.filter((plot) => {
    const matchesSearch =
      searchTerm === '' ||
      plot.id.toString().includes(searchTerm) ||
      plot.boughtBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plot.soldBy.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || plot.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (!projectId) {
    return (
      <Box py={8}>
        <Container maxW="container.xl">
          <Heading mb={8} color="brand.600" textAlign="center">
            Select a Project to Manage Plots
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {projects.map((project) => (
              <MotionBox
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <VStack
                  p={6}
                  bg={cardBgColor}
                  borderRadius="xl"
                  borderWidth={1}
                  borderColor={cardBorderColor}
                  spacing={4}
                  align="stretch"
                  cursor="pointer"
                  onClick={() => navigate(`/manage-plots?project=${project.id}`)}
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: 'xl',
                  }}
                  transition="all 0.2s"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    borderRadius="lg"
                    h="200px"
                    objectFit="cover"
                    fallbackSrc="https://via.placeholder.com/400x200"
                  />
                  <Heading size="md" color="brand.500">
                    {project.name}
                  </Heading>
                  <Text color={textColor}>
                    {project.description}
                  </Text>
                  <Button colorScheme="brand" size="lg">
                    Manage Plots
                  </Button>
                </VStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }

  return (
    <Box py={8} bg={headerBgColor} minH="100vh">
      <Container maxW="container.xl">
        <Flex 
          justify="space-between" 
          align="center" 
          mb={8}
          p={6}
          bg="white"
          borderRadius="xl"
          boxShadow="sm"
        >
          <Heading color="green.600">
            Manage Plots - {projects.find(p => p.id === projectId)?.name || 'Project'}
          </Heading>
          <Button
            bg={buttonBgColor}
            color="white"
            _hover={{
              bg: buttonHoverColor,
              transform: 'translateY(-2px)',
              boxShadow: 'md'
            }}
            onClick={() => {
              setIsEditing(true);
              onPlotModalOpen();
            }}
          >
            Manage Plot Count
          </Button>
        </Flex>

        <Box 
          p={6} 
          bg="white" 
          borderRadius="xl" 
          boxShadow="sm"
          mb={6}
        >
          <HStack spacing={4}>
            <Input
              placeholder="Search by Plot ID, Buyer, or Seller"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              maxW="400px"
              borderColor="green.200"
              _focus={{ borderColor: 'green.400' }}
            />
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              maxW="200px"
              borderColor="green.200"
              _focus={{ borderColor: 'green.400' }}
            >
              <option value="all">All Status</option>
              <option value={PLOT_STATUS.AVAILABLE}>Available</option>
              <option value={PLOT_STATUS.SOLD}>Sold</option>
              <option value={PLOT_STATUS.BOOKED}>Booked</option>
            </Select>
          </HStack>
        </Box>

        <Box 
          p={6} 
          bg="white" 
          borderRadius="xl" 
          boxShadow="sm"
        >
          <SimpleGrid columns={{ base: 2, sm: 3, md: 6, lg: 8 }} spacing={4}>
            {filteredPlots.map((plot) => (
              <Tooltip
                key={plot.id}
                label={`Status: ${plot.status}${plot.boughtBy ? `\nBought By: ${plot.boughtBy}` : ''}${
                  plot.soldBy ? `\nSold By: ${plot.soldBy}` : ''
                }`}
                hasArrow
              >
                <Box
                  bg={STATUS_COLORS[plot.status]}
                  w="100%"
                  h="100px"
                  borderRadius="lg"
                  cursor="pointer"
                  onClick={() => handlePlotClick(plot)}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="all 0.2s"
                  _hover={{ 
                    transform: 'scale(1.05)',
                    boxShadow: 'md'
                  }}
                >
                  <Text
                    color={plot.status === PLOT_STATUS.BOOKED ? 'black' : 'white'}
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    {plot.plotId}
                  </Text>
                </Box>
              </Tooltip>
            ))}
          </SimpleGrid>
        </Box>

        {selectedPlot && (
          <PlotModal
            isOpen={isOpen}
            onClose={onClose}
            plot={selectedPlot}
            onUpdate={handleUpdatePlot}
          />
        )}

        {/* Plot Count Management Modal */}
        <Modal isOpen={isPlotModalOpen} onClose={onPlotModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader bg="green.50" color="green.700">Manage Plot Count</ModalHeader>
            <ModalBody>
              <VStack spacing={4}>
                <Text color={textColor}>Current number of plots: {plots.length}</Text>
                <FormControl>
                  <FormLabel color="green.700">Number of plots to {isEditing ? 'add/remove' : 'add'}</FormLabel>
                  <NumberInput
                    min={1}
                    value={plotCount}
                    onChange={(value) => setPlotCount(parseInt(value) || 0)}
                  >
                    <NumberInputField 
                      borderColor="green.200"
                      _focus={{ borderColor: 'green.400' }}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onPlotModalClose}>
                Cancel
              </Button>
              <Button 
                bg="green.400" 
                color="white" 
                _hover={{ bg: 'green.500' }}
                mr={3} 
                onClick={handleAddPlots}
              >
                Add Plots
              </Button>
              <Button 
                bg="red.400" 
                color="white" 
                _hover={{ bg: 'red.500' }}
                onClick={handleRemovePlots}
              >
                Remove Plots
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

const PlotModal = ({ isOpen, onClose, plot, onUpdate }) => {
  const [status, setStatus] = useState(plot.status);
  const [boughtBy, setBoughtBy] = useState(plot.boughtBy);
  const [soldBy, setSoldBy] = useState(plot.soldBy);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      ...plot,
      status,
      boughtBy,
      soldBy,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Plot {plot.id}</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Status</FormLabel>
              <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value={PLOT_STATUS.AVAILABLE}>Available</option>
                <option value={PLOT_STATUS.SOLD}>Sold</option>
                <option value={PLOT_STATUS.BOOKED}>Booked</option>
              </Select>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Bought By</FormLabel>
              <Input
                value={boughtBy}
                onChange={(e) => setBoughtBy(e.target.value)}
                placeholder="Enter buyer's name"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Sold By</FormLabel>
              <Input
                value={soldBy}
                onChange={(e) => setSoldBy(e.target.value)}
                placeholder="Enter seller's name"
              />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="brand" onClick={handleSubmit}>
            Update Plot
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ManagePlots; 