import { Container, Text, VStack, Heading, Box, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [feedback, setFeedback] = useState("");
  const toast = useToast();

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    toast({
      title: "Feedback submitted.",
      description: "Thank you for your feedback!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setFeedback("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">GPT Engineer Benchmarking Tool</Heading>
        <Text fontSize="lg">Welcome to the GPT Engineer Benchmarking Tool. Follow the instructions below to provide your feedback.</Text>
        <Box width="100%" p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>Instructions</Heading>
          <Text mb={4}>1. Execute the main() function to open browser windows for each scenario.</Text>
          <Text mb={4}>2. Follow the initial prompts for all scenarios.</Text>
          <Text mb={4}>3. Provide your feedback for each checklist instance.</Text>
          <Text mb={4}>4. Leave your grade and feedback for all scenarios.</Text>
        </Box>
        <Box width="100%" p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>Feedback</Heading>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback here..."
            style={{ width: "100%", height: "100px", padding: "8px", borderRadius: "4px", borderColor: "#CBD5E0" }}
          />
          <Button mt={4} colorScheme="teal" onClick={handleSubmit}>Submit Feedback</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;