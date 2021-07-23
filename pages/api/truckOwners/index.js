import { truckOwners } from '/Users/tuvalsimha/FoodTruck/data.js'

export default function handler(req, res) {
  res.status(200).json(truckOwners)
}
