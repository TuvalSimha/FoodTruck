import { Input } from 'react';
import React from "react";
import {
    FormControl,
    FormLabel,
  } from "@chakra-ui/react"


export const SearchBox: React.FC = () => {
  return (
 <FormControl id="Search-box" isRequired>
  <FormLabel></FormLabel>
  <Input placeholder="Search box" />
</FormControl>
  );
};
