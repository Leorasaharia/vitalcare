import {
  Box,
  Flex,
  Icon,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import { useState } from "react";
import { MdUpload } from "react-icons/md";
import Dropzone from "views/admin/profile/components/Dropzone";

export default function Upload(props) {
  const { used, total, ...rest } = props;
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileUpload = (acceptedFiles) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    // Send the file to the backend
    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setUploadMessage("File uploaded successfully!");
        setFile(acceptedFiles[0]);
      })
      .catch((error) => {
        setUploadMessage("File upload failed.");
        console.error("Error:", error);
      });
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
          onDrop={handleFileUpload}
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
          {uploadMessage && <Text color="green.500">{uploadMessage}</Text>}
        </Flex>
      </Flex>
    </Card>
  );
}
