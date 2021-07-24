export type Person = {
  id: string;
  name: string;
  height: number;
  weight: number;
  fav_food: string;
  fav_drink: string;
  city: string;
};

export const truckOwners: Person[] = [
  {
    id: "1",
    name: "Omer Dado",
    height: 102,
    weight: 20,
    fav_food: "Pizza",
    fav_drink: "liquid Pizza",
    city: "Tiberias",
  },
  {
    id: "2",
    name: "Guy Dado",
    height: 50,
    weight: 6000,
    fav_food: "All Food Types",
    fav_drink: "liquid All Food Types",
    city: "Tiberias",
  },
  {
    id: "3",
    name: "Dotan Simha",
    height: 170,
    weight: 80,
    fav_food: "Ptitim",
    fav_drink: "liquid Ptitim",
    city: "Gvinatime",
  },
  {
    id: "4",
    name: "Nam The Gvinam",
    height: 170,
    weight: 50,
    fav_food: "Pizza",
    fav_drink: "liquid Dotan",
    city: "Gvinatime",
  },
  {
    id: "5",
    name: "Moris The Idiot",
    height: 180,
    weight: 70,
    fav_food: "BBQ",
    fav_drink: "Coffee",
    city: "K-8",
  },
  {
    id: "6",
    name: "Tal Bola",
    height: 165,
    weight: 50,
    fav_food: "Pizza + Hamburger",
    fav_drink: "Food!",
    city: "Eilat",
  },
];
