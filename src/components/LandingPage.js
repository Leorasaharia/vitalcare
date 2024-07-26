import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
    const history = useHistory();

    const proceedToDashboard = () => {
        history.push('/auth'); // Adjust this route if needed
    };

    return (
        <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="linear-gradient(135deg, #e0f7fa, #e1bee7)"
            color="#333"
        >
            <VStack
                background="white"
                padding="30px"
                borderRadius="10px"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
                textAlign="center"
            >
                <Text fontSize="3xl" color="#6200ea" marginBottom="10px">
                    Welcome to HealthBot
                </Text>
                <Text fontSize="lg" marginBottom="20px">
                    Your ultimate companion for health tracking and insights. Let's get started on a journey to better health.
                </Text>
                <Button 
                    colorScheme="purple" 
                    onClick={proceedToDashboard}
                >
                    Proceed to Dashboard
                </Button>
            </VStack>
        </Box>
    );
};

export default LandingPage;