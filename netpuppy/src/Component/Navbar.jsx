import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex backgroundColor="#b90124" gap="9%" color="white">
      <Box width="45%" marginRight="5%" fontWeight="600">
        <Flex justifyContent="space-between" listStyleType="none">
          <Text className="navbar-text" marginLeft="7%" as="li">INQUIRE</Text>
          <Text className="navbar-text" as="li">APPLY</Text>
          <Text className="navbar-text" as="li">SUPPORT US</Text>
        </Flex>
      </Box>
      <Box borderLeft="0.5px solid rgba(255, 255, 255, 1)" height="37px" marginTop="7px" ></Box>
      <Box width="25%">
        <Flex justifyContent="space-between" listStyleType="none">
          <Text className="navbar-text" as="li">PARENTS</Text>
          <Text className="navbar-text" as="li">ALUMS</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
