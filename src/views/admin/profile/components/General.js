// Chakra imports
import { Box, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";

const Information = ({ boxShadow, title, value }) => (
  <Box
    boxShadow={boxShadow}
    p="20px"
    borderRadius="8px"
    bg={useColorModeValue("white", "gray.700")}
  >
    <Text fontSize="md" fontWeight="bold" mb="10px">
      {title}
    </Text>
    <Text fontSize="sm">{value}</Text>
  </Box>
);

export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        General Information
      </Text>
      <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px">
        General information about the patient including vital parameters, medical history, and pre-checks.
      </Text>
      <SimpleGrid columns="2" gap="20px">
        <Information
          boxShadow={cardShadow}
          title="Heart Rate"
          value="72 bpm"
        />
        <Information
          boxShadow={cardShadow}
          title="Blood Pressure"
          value="120/80 mmHg"
        />
        <Information
          boxShadow={cardShadow}
          title="Temperature"
          value="98.6°F"
        />
        <Information
          boxShadow={cardShadow}
          title="Respiratory Rate"
          value="16 breaths/min"
        />
        <Information
          boxShadow={cardShadow}
          title="Blood Test"
          value="Normal"
        />
        <Information
          boxShadow={cardShadow}
          title="ECG"
          value="Normal"
        />
        <Information
          boxShadow={cardShadow}
          title="X-ray"
          value="No issues detected"
        />
        <Information
          boxShadow={cardShadow}
          title="Allergies"
          value="None"
        />
      </SimpleGrid>
    </Card>
  );
}
