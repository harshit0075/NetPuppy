import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex backgroundColor="#b90124" gap="3%" marginLeft="10%" color="white">
      <Box width="45%" marginRight="1%" fontWeight="600">
        <Flex justifyContent="space-between" listStyleType="none">
          <Text as="li">INQUIRE</Text>
          <Text as="li">APPLY</Text>
          <Text as="li">SUPPORT US</Text>
        </Flex>
      </Box>
      <Box borderLeft="0.5px solid rgba(255, 255, 255, 0.5)" height="37px" marginTop="7px"></Box>
      <Box width="25%">
        <Flex justifyContent="space-between" listStyleType="none">
          <Text as="li">PARENTS</Text>
          <Text as="li">ALUMS</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
