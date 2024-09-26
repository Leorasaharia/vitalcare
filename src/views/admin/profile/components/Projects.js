// Chakra imports
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
// Assets
import Project2 from "assets/img/profile/Project2.png";
// Custom components
import Card from "components/card/Card.js";
import Project from "views/admin/profile/components/Project";

export default function Projects(props) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        All projects
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Here you can find more details about your projects. Keep your user
        engaged by providing meaningful information.
      </Text>

      <Project
        boxShadow={cardShadow}
        mb='20px'
        image={Project2}
        ranking='2'
        link='#'
        title='Greatest way to a good Economy'
      />

      <Box mt='40px'>
        <Text
          color={textColorPrimary}
          fontWeight='bold'
          fontSize='xl'
          mb='4px'>
          Patient Demographics
        </Text>
        <Text color={textColorSecondary} fontSize='md'>
          <strong>Name:</strong> Leora Saharia<br />
          <strong>Institution:</strong> NIT Raipur<br />
          <strong>Year:</strong> 2nd Year<br />
          <strong>Gender:</strong> Female<br />
          <strong>Weight:</strong> 48 kg<br />
          <strong>Height:</strong> 161 cm<br />
          <strong>Blood Group:</strong> A+<br />
          <strong>Ethnicity:</strong> Assamese<br />
          <strong>Date of Birth:</strong> 14/12/2004<br />
          <strong>Last Diagnosis:</strong> Sebaceous cyst on chest removed via surgery<br />
          <strong>Vitals:</strong> Normal
        </Text>
      </Box>
    </Card>
  );
}
