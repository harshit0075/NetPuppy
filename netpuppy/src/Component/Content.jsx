import React from "react";
import { Box, Heading, Text, Flex, Image,} from "@chakra-ui/react";
import women from "../../src/Assets/women.svg";
import arrow from "../../src/Assets/arrow.png";

const Content = () => {
  return (
    <Flex
      height="500px"
      justifyContent="start"
      alignItems="start"
      textAlign="start"
      gap="135px"
      marginTop="90px"
    >
      <Box id="w-image" width="296px" marginLeft="104px">
        <Image src={women} alt="" width="296px" height="401px" />
      </Box>
      <Box id="content" width="45%" padding="10px">
        <Heading fontFamily="mirador" color="#b90124">
          At Tula’s, we ask, “How can we make school better?”
        </Heading>
        <Text>
          Using the latest research on how girls learn best, we designed an
          innovative modular schedule, personalized for each student. Our girls
          are focused, not overwhelmed. “Girls Rule” isn’t just a saying here.
          Develop leadership skills, build compassion, gain responsibility, and
          prepare to change the world.
        </Text>
        <Flex
          id="activity"
          width="371px"
          height="49px"
          justifyContent="space-around"
          alignItems="center"
          marginLeft="190px"
          marginTop="100px"
          borderRadius="30px"
          border="1px solid #dbc79f"
        >
          <Text>LEARN MORE</Text>
          <Image src={arrow} alt="arrow" width="53px" height="28px" />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Content;
