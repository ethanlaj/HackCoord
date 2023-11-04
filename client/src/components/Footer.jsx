import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import config from '../config';

const Footer = () => {
  return (
    <Box as="footer" width="full" align="center" p={4} bg="teal.500" color="white">
      <Text>&copy; {new Date().getFullYear()} {config.name}</Text>
    </Box>
  );
};

export default Footer;
