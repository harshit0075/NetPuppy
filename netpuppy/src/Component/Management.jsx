import React from "react";
import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import students from "../../src/Assets/students.svg";
import options from "../../src/Assets/options.png";

const Management = () => {
  return (
    <Flex height="500px" alignItems="center" justifyContent="center">
      <Box textAlign="center">
        <Text color="#202833" fontSize="30px" fontFamily="Abril Fatface" fontWeight="400" fontStyle="normal">
          Why{" "}
        </Text>{" "}
        <Text color="#B90124" fontSize="30px" fontFamily="Abril Fatface" fontWeight="400" fontStyle="normal">
          TIS ?
        </Text>
        <Flex gap="55px" marginTop="50px">
          <Box width="450px">
            <Text color="#202833" fontSize="30px" textAlign="start" marginBottom="10px">
              A FOCUS ON...
            </Text>
            <Heading color="#b90124" fontSize="40px" marginBottom="-15px">
              MANAGEMENT
            </Heading>
            <Text fontSize="20px" textAlign="start" marginTop="20px">
              Extremely Friendly and Approachable Management. | Tula’s International School combines - respect for |
              tradition with a progressive application of modern | sciences, academic rigour with a caring heart, and
              individual appreciation with the warmth of a school | community |
            </Text>
          </Box>
          <Image src={students} alt="students" width="370px" height="688px" marginTop="-120px" marginLeft="20px" />
          <Image src={options} alt="options" width="78px" height="345px" marginTop="32px" />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Management;
