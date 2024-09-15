import {
    Button,
    Flex,
    Link,
    Text,
    useColorModeValue
} from "@chakra-ui/react";

export default function SidebarDocs() {
  const bgColor = "linear-gradient(135deg, #e0b3ff 0%, #d1a3ff 100%)"; // Pastel purple gradient
  const borderColor = useColorModeValue("white", "purple.300");

  return (
    <Flex
      justify='center'
      direction='column'
      align='center'
      bg={bgColor}
      borderRadius='20px' // Smaller border radius
      position='relative'
      width='240px' // Smaller width
      padding='20px' // Added padding to control inner spacing
      >
      <Flex
        border='4px solid'
        borderColor={borderColor}
        bg={bgColor}
        borderRadius='50%'
        w='70px' // Smaller width
        h='70px' // Smaller height
        align='center'
        justify='center'
        mx='auto'
        position='absolute'
        left='50%'
        top='-35px' // Adjusted position for smaller size
        transform='translate(-50%, 0%)'>
      </Flex>
      <Flex
        direction='column'
        mb='8px' // Reduced margin-bottom
        align='center'
        justify='center'
        px='10px'
        pt='45px'> {/* Reduced padding-top */}
        <Text
          fontSize='md' // Reduced font size
          color='white'
          fontWeight='bold'
          lineHeight='140%'
          textAlign='center'
          px='8px'
          mt='8px'
          mb='4px'>
          Upgrade Your Plan
        </Text>
        <Text
          fontSize='12px' // Smaller font size
          color={"white"}
          fontWeight='500'
          px='8px'
          mb='4px'
          textAlign='center'>
          Enhance your experience with VitalCare!
        </Text>
      </Flex>
      <Link href='https://Vitalcare.com/upgrade?ref=sidebar-docs'>
        <Button
          bg='whiteAlpha.400' // Softer white on pastel purple
          _hover={{ bg: "whiteAlpha.300" }}
          _active={{ bg: "whiteAlpha.200" }}
          mb='12px' // Smaller margin-bottom
          color={"white"}
          fontWeight='regular'
          fontSize='xs' // Smaller font size
          minW='160px' // Reduced button width
          mx='auto'>
          Upgrade Now
        </Button>
      </Link>
    </Flex>
  );
}
