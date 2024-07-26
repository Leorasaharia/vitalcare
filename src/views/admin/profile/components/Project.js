// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import { MdEdit } from "react-icons/md";

// PreChecks and Previous Records Component
const PreChecksAndRecords = ({ title, date, link, description }) => {
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");

  return (
    <Card bg={bg} p="10px" mb="10px">
      <Flex align="center">
        <Box>
          <Text color={textColorPrimary} fontWeight="500" fontSize="md" mb="2px">
            {title}
          </Text>
          <Text fontWeight="500" color={textColorSecondary} fontSize="sm" mb="2px">
            {description}
          </Text>
          <Text fontWeight="500" color={textColorSecondary} fontSize="sm">
            Date: {date} •{" "}
            <Link fontWeight="500" color={brandColor} href={link} fontSize="sm">
              View details
            </Link>
          </Text>
        </Box>
        <Link href={link} variant="no-hover" ms="auto" p="0px !important">
          <Icon as={MdEdit} color="secondaryGray.500" h="18px" w="18px" />
        </Link>
      </Flex>
    </Card>
  );
};

export default function Profile() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
        }}
        gap="10px"
      >
        <PreChecksAndRecords
          title="Blood Test"
          date="2024-07-24"
          description="Routine blood test to check cholesterol levels."
          link="#"
        />
        <PreChecksAndRecords
          title="ECG"
          date="2024-07-20"
          description="Electrocardiogram to check heart activity."
          link="#"
        />
        <PreChecksAndRecords
          title="X-ray"
          date="2024-07-18"
          description="Chest X-ray to examine lungs and heart."
          link="#"
        />
      </Grid>
    </Box>
  );
}
