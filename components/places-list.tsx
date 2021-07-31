import React from "react";
import { ListItem, ListIcon, List } from "@chakra-ui/react";
import { GiFoodTruck } from "react-icons/gi";

export const PlacesList: React.FC = () => {
  return (
    <List>
      <ListItem>
        <ListIcon as={GiFoodTruck} />
        Lorem ipsum dolor sit amet
      </ListItem>
      <ListItem>
        <ListIcon as={GiFoodTruck} />
        Consectetur adipiscing elit
      </ListItem>
      <ListItem>
        <ListIcon as={GiFoodTruck} />
        Integer molestie lorem at massa
      </ListItem>
      <ListItem>
        <ListIcon as={GiFoodTruck} />
        Facilisis in pretium nisl aliquet
      </ListItem>
    </List>
  );
};
