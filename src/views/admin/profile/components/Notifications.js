// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import SwitchField from "components/fields/SwitchField";
import Menu from "components/menu/MainMenu";

export default function Notifications(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card mb="20px" mt="40px" mx="auto" maxW="410px" {...rest}>
      <Flex align="center" w="100%" justify="space-between" mb="30px">
        <Text
          color={textColorPrimary}
          fontWeight="bold"
          fontSize="2xl"
          mb="4px"
        >
          Health News Notifications
        </Text>
        <Menu />
      </Flex>
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="1"
        label="Daily Health Tips"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="2"
        label="New Research Updates"
      />
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="3"
        label="Vaccination Reminders"
      />
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="4"
        label="Mental Health Resources"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="5"
        label="Diet and Nutrition Advice"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="6"
        label="Exercise and Fitness Tips"
      />
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="7"
        label="Health Policy News"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="8"
        label="Local Health Alerts"
      />
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize="sm"
        mb="20px"
        id="9"
        label="Global Health News"
      />
      <SwitchField
        reversed={true}
        fontSize="sm"
        id="10"
        label="Personalized Health Updates"
      />
    </Card>
  );
}
