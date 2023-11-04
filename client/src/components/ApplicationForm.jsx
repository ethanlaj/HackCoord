import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Stack } from '@chakra-ui/react';

const ApplicationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // This would be fetched from questions.json
	/*
	First Name
	Last Name
	Email address
	Phone number
	Date of birth
	Gender (Male, Female, Other, None, Prefer not to answer)
	Country of residence
	T-shirt size
	Dietary Restrictions
	*/
  const questions = [
    { label: 'Full Name', name: 'fullName' },
    { label: 'Email Address', name: 'email' },
    // Add more questions as required
  ];

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {questions.map((question) => (
            <FormControl key={question.name} id={question.name}>
              <FormLabel>{question.label}</FormLabel>
              <Input name={question.name} onChange={handleChange} required />
            </FormControl>
          ))}
          <Button type="submit" colorScheme="teal" size="lg" fontSize="md">
            Submit Application
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default ApplicationForm;
