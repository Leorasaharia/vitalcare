import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Heading, Text, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
    const history = useHistory();
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const { toggleColorMode } = useColorMode();
    const bgGradient = useColorModeValue("linear-gradient(135deg, #f0e7db, #e3f6f5)", "linear-gradient(135deg, #2d3748, #4a5568)");
    const textColor = useColorModeValue("#2D3748", "#F7FAFC");
    const buttonBg = useColorModeValue("purple.500", "purple.300");
    const buttonHoverBg = useColorModeValue("purple.600", "purple.400");

    const proceedToDashboard = () => {
        history.push('/auth'); // Adjust this route if needed
    };

    return (
        <Box height="100vh" display="flex" alignItems="center" justifyContent="center" background={bgGradient} color={textColor}>
            <VStack 
                background={useColorModeValue("white", "gray.700")} 
                padding="40px" 
                borderRadius="15px" 
                boxShadow="lg" 
                textAlign="center" 
                spacing={6}
                width="100%"
                maxW="md"
            >
                <Heading fontSize="4xl" color={buttonBg}>Welcome to VitalCare</Heading>
                <Text fontSize="lg" marginBottom="10px">
                    Your ultimate companion for health tracking and insights. Let's get started on a journey to better health.
                </Text>
                
                {
                    isAuthenticated ? (
                        <Button 
                            as="a" 
                            href="/admin" 
                            bg={buttonBg} 
                            color="white" 
                            _hover={{ bg: buttonHoverBg }}
                            size="lg"
                        >
                            Proceed to Dashboard
                        </Button>
                    ) : null
                }

                {
                    isAuthenticated ? (
                        <Button 
                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} 
                            size="lg" 
                            variant="outline"
                            colorScheme="purple"
                        >
                            Log Out
                        </Button>
                    ) : (
                        <Button 
                            colorScheme="purple" 
                            onClick={() => loginWithRedirect()} 
                            size="lg"
                        >
                            Log In
                        </Button>
                    )
                }

                <Button 
                    onClick={toggleColorMode} 
                    size="md" 
                    variant="ghost" 
                    colorScheme="purple"
                >
                    {useColorModeValue(<FaMoon />, <FaSun />)}
                </Button>
            </VStack>
        </Box>
    );
};

export default LandingPage;
