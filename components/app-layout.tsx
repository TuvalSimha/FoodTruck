import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const AppLayout: React.FC<{
  sideComponent?: React.ReactChild;
}> = (props) => {
  return (
    <Flex height={"100%"}>
      <Box flex="1" height={"100%"}>
        {props.children}
      </Box>
      {props.sideComponent ? <Box w="300px">{props.sideComponent}</Box> : null}
    </Flex>
  );
};


