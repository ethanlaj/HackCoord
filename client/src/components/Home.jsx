import React from 'react';
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import config from '../config';

const Home = ({ isLoggedIn, userRole }) => {
  // Assuming isLoggedIn and userRole are props or derived from a context/auth hook
  
  return (
    <Container maxW="container.xl">
      <VStack spacing={4} align="stretch" my={16}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading mb={4}>Welcome to {config.name}!</Heading>
          <Text fontSize="xl">
            {config.description}
          </Text>
          {isLoggedIn ? (
            userRole === 'admin' ? (
              <Button colorScheme="teal" size="lg" mt={4}>
                View Applications
              </Button>
            ) : (
              <Button colorScheme="teal" size="lg" mt={4}>
                Apply Now
              </Button>
            )
          ) : (
            <Button colorScheme="teal" size="lg" mt={4}>
              Register / Sign Up
            </Button>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;
