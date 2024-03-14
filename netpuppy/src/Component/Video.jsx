import React from "react";
import { Box } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";
import girls from "../../src/Assets/girls.svg";

const Video = () => {
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      backgroundImage={`url(${girls})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      height="912px"
      borderRadius="20px"
      
    >
      <Box
        position="absolute"
        top=""
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        borderRadius="20px"
      />
      <FaYoutube className="youtube" size={172} position="absolute"  color="white"  marginTop="24%" zIndex="1" />
    </Box>
  );
};

export default Video;
