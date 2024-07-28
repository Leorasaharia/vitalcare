
// Chakra imports
import { Flex, Image, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  // Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Image src="/healthbot.png" alt="Healthbot Logo" h="90px" w="90px" my="32px" />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
