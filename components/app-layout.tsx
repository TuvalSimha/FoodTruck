import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const AppLayout: React.FC<{
  sideComponent?: React.ReactChild;
}> = (props) => {
  return (
    <Flex height={"100%"}>
      <Box flexShrink={0} height={"100%"}>
        {props.children}
      </Box>
      {props.sideComponent ? <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} w="300px">{props.sideComponent}</Box> : null}
    </Flex>
  );
};

