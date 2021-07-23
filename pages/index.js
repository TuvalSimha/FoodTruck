import useSWR from 'swr'
//import Person from '/Users/tuvalsimha/FoodTruck/components/person.js'

import Person from '../components/person'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const localApiPath = '/api/truckOwners';
  const { data, error } = useSWR(localApiPath, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((p, i) => (
        <Person key={i} person={p} />
      ))}
    </ul>
  )
}
