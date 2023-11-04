import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import config from '../config';

const Header = ({ user, onLogout }) => {
  return (
    <Flex as="header" width="full" align="center" justifyContent="space-between" p={4} bg="teal.500" color="white">
      <Text fontSize="xl" fontWeight="bold">
        {config.name}
      </Text>
      {user && (
        <Box>
          <Text fontSize="md">Hello, {user.name}</Text>
          <Button colorScheme="teal" variant="outline" onClick={onLogout}>
            Logout
          </Button>
        </Box>
      )}
    </Flex>
  );
};

export default Header;
