import React from "react";
import { Flex, Box, Heading, Text, Image,} from "@chakra-ui/react";
import horse from "../../src/Assets/horse.svg";
import swim from "../../src/Assets/swimming.svg";
import taek from "../../src/Assets/taekwondo.svg";
import context from "../../src/Assets/context.png";
import context2 from "../../src/Assets/context2.png";
import more from "../../src/Assets/seemore.svg";
import arrow from "../../src/Assets/arrow.png";
import rectangle from "../../src/Assets/Rectangle 19.svg";

const Header = () => {
  return (
    <Flex height="958px">
      {/* Left Div */}
      <Box width="51%" id="left-div">
        <Box width="636px" height="134px" marginTop="78px" marginLeft={"40px"} >
          <Image src={context} alt="context" />
        </Box>
        <Box width="426px" height="48px" marginTop="14px" marginLeft={"40px"}>
          <Image src={context2} alt="context2" />
        </Box>
        <Flex
          className="image-content"
          position="relative"
          backgroundImage={`url(${swim})`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          width="513px"
          height="288px"
          marginTop="96px"
          marginLeft="62px"
          borderRadius="10px"
          alignItems="end"
        >
          <Box position="absolute" top="0" left="0" width="100%" height="100%" backgroundColor="rgba(0, 0, 0, 0.5)" borderRadius="10px" />
          <Box position="relative" zIndex="1" height="100px" width="40%" top="58%" padding="5px 0 0 50px" color="white" marginTop="96px" backgroundColor="transparent" textAlign="start">
            <Heading fontSize="2xl">Swimming</Heading>
            <Text>22 Acres, Pollution-Free,</Text>
            <Text>World-Class</Text>
          </Box>
        </Flex>
        <Flex width="371px" height="49px" justifyContent="space-around" alignItems="center" marginTop="161px" marginLeft="50px" borderRadius="30px" border="1px solid #dbc79f" id="activity">
          <Text fontSize="xl">SEE ALL ACTIVITIES</Text>
          <Image src={arrow} alt="arrow" width="53px" height="28px" />
        </Flex>
      </Box>

      {/* Mid Div */}
      <Box width="6%" marginTop="32%" marginLeft="-3%">
        <Image src={more} alt="seemore" width="160px" height="159px" />
      </Box>

      {/* Right Div */}
      <Flex width="43%" flexDirection="column" gap="30%" id="right-div">
        <Box>
          <Flex
            id="taekwondo"
            position="relative"
            backgroundImage={`url(${taek})`}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            width="513px"
            height="288px"
            marginTop="20%"
            marginLeft="14%"
            borderRadius="10px"
            border="1px solid green"
            alignItems="end"
          >
            <Box position="absolute" top="0" left="0" width="100%" height="100%" backgroundColor="rgba(0, 0, 0, 0.5)" borderRadius="10px" />
            <Box position="relative" zIndex="1" height="100px" width="40%" padding="5px 0 0 50px" color="white" marginTop="170px" backgroundColor="transparent" textAlign="start">
              <Heading fontSize="2xl">Taekwondo</Heading>
              <Text>22 Acres, Pollution-Free,</Text>
              <Text>World-Class</Text>
            </Box>
          </Flex>
          <Box id="horse">
            <Flex
              className="content"
              position="relative"
              backgroundImage={`url(${horse})`}
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              width="513px"
              height="288px"
              marginTop="22%"
              marginLeft="20%"
              borderRadius="10px"
              border="1px solid green"
              alignItems="end"
            >
              <Box position="absolute" top="0" left="0" width="100%" height="100%" backgroundColor="rgba(0, 0, 0, 0.5)" borderRadius="10px" />
              <Box position="relative" zIndex="1" height="100px" width="40%" padding="5px 0 0 50px" color="white" marginTop="170px" backgroundColor="transparent" textAlign="start">
                <Heading fontSize="2xl">Horse Riding</Heading>
                <Text>22 Acres, Pollution-Free,</Text>
                <Text>World-Class</Text>
              </Box>
              <Image src={rectangle} alt="" />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
