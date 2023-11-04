import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const UserDashboard = ({ applicationStatus, onConfirmParticipation }) => {
  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>Your Application Status: {applicationStatus}</Text>
      {applicationStatus === 'accepted' && (
        <Button colorScheme="teal" onClick={onConfirmParticipation}>
          Confirm Participation
        </Button>
      )}
      {/* Other user related information */}
    </Box>
  );
};

export default UserDashboard;
