import { Flex, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import champion from "../../src/Assets/champion.png";
import arrow from "../../src/Assets/arrow.png";
import one from "../../src/Assets/one.png";
import collaborations from "../../src/Assets/collaborations.png";
const Bottom = () => {
  return (
    <div>
      <Box backgroundColor={"#F8F5F0"}>
        <Flex
          width={"70%"}
          margin={"auto"}
          height={"300px"}
          justifyContent={"space-around"}
          alignItems={"center"}
          marginTop={"100px"}
        >
          <Image src={champion} alt="champion" boxSize={"200px"} />
          <Image src={arrow} alt="arrow" boxSize={"50px"} />
          <Flex justifyContent={"space-between"} width={"50%"}>
            <Box
              backgroundColor={"#B90124"}
              width={"150px"}
              height={"150px"}
              borderRadius={"5px"}
            >
              <Image src={one} width={"35px"} marginTop={"20px"} />
              <Text color={"white"}>In Dehradun</Text>
              <Text color={"white"} fontSize={"10px"}>Co-educational Boarding School in Dehradun by education Today 2020</Text>
            </Box>
            <Box
              backgroundColor={"#B90124"}
              width={"150px"}
              height={"150px"}
              borderRadius={"5px"}
            >
              <Image src={one} width={"35px"} marginTop={"20px"} />
              <Text color={"white"}>In Dehradun</Text>
              <Text color={"white"} fontSize={"10px"}>Co-educational Boarding School in Dehradun by education Today 2020</Text>
            </Box>
            <Box
              backgroundColor={"#B90124"}
              width={"150px"}
              height={"150px"}
              borderRadius={"5px"}
            >
              <Image src={one} width={"35px"} marginTop={"20px"} />
              <Text color={"white"}>In Dehradun</Text>
              <Text color={"white"} fontSize={"10px"}>Co-educational Boarding School in Dehradun by education Today 2020</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Image src={collaborations} alt="collaborations" width={"100%"} />
    </div>
  );
};

export default Bottom;
