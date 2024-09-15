// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import { useState } from "react";
// Assets
import { MdUpload } from "react-icons/md";
import Dropzone from "views/admin/profile/components/Dropzone";

export default function Upload(props) {
  const { used, total, ...rest } = props;
  const [reportGenerated, setReportGenerated] = useState(false);
  const [generatedReport, setGeneratedReport] = useState("");

  // Function to generate the fake scan and report
  const generateFakeReport = () => {
    const reportData = `
      Name: Jane Doe
      Age: 19
      Gender: Female
      Weight: 48 kg
      Height: 161 cm
      Blood Pressure: 110/70 mmHg
      Heart Rate: 72 bpm
      Body Temperature: 36.8°C
      Blood Sugar: 90 mg/dL
      Oxygen Saturation: 98%
      Cholesterol: 180 mg/dL
      Hemoglobin: 13.5 g/dL
      BMI: 18.5 (Normal)
      Medical History: No significant medical history.
      Last Check-up: 2024-09-01
    `;

    setGeneratedReport(reportData);
    setReportGenerated(true);
  };

  // Function to trigger file download
  const downloadReport = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedReport], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "medical_report.txt";
    document.body.appendChild(element);
    element.click();
  };

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "gray.400";

  return (
    <Card {...rest} mb="20px" align="center" p="20px">
      <Flex h="100%" direction={{ base: "column", "2xl": "row" }}>
        <Dropzone
          w={{ base: "100%", "2xl": "268px" }}
          me="36px"
          maxH={{ base: "60%", lg: "50%", "2xl": "100%" }}
          minH={{ base: "60%", lg: "50%", "2xl": "100%" }}
          content={
            <Box>
              <Icon as={MdUpload} w="80px" h="80px" color={brandColor} />
              <Flex justify="center" mx="auto" mb="12px">
                <Text fontSize="xl" fontWeight="700" color={brandColor}>
                  Upload Your Reports
                </Text>
              </Flex>
              <Text fontSize="sm" fontWeight="500" color="secondaryGray.500">
                PDF, PNG and JPG files are allowed
              </Text>
            </Box>
          }
        />
        <Flex direction="column" pe="44px">
          <Text
            color={textColorPrimary}
            fontWeight="bold"
            textAlign="start"
            fontSize="2xl"
            mt={{ base: "20px", "2xl": "50px" }}
          >
            Update Your Records
          </Text>
          <Text
            color={textColorSecondary}
            fontSize="md"
            my={{ base: "auto", "2xl": "10px" }}
            mx="auto"
            textAlign="start"
          >
            Please upload a copy of your recent medical prescription. This will help us better understand your needs and provide tailored recommendations for your health.
          </Text>
          <Flex w="100%">
            <Button
              me="100%"
              mb="50px"
              w="140px"
              minW="140px"
              mt={{ base: "20px", "2xl": "auto" }}
              variant="brand"
              fontWeight="500"
              onClick={generateFakeReport}
            >
              Upload Now
            </Button>
          </Flex>

          {reportGenerated && (
            <Button
              mt="10px"
              variant="outline"
              colorScheme="blue"
              onClick={downloadReport}
            >
              Download Medical Report
            </Button>
          )}
        </Flex>
      </Flex>
    </Card>
  );
}
