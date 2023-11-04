import React from 'react';
import { Button } from '@chakra-ui/react';

const Login = ({ onLogin }) => {
  return (
    <Button onClick={onLogin} colorScheme="teal" size="lg" fontSize="md">
      Login / Sign Up
    </Button>
  );
};

export default Login;
