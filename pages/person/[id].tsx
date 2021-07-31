import { Person } from "@shared/models";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function PersonItem() {
  const { query } = useRouter();
  const { data, error } = useSWR<Person>(
    () => query.id && `/api/truckOwners/${query.id}`,
    fetcher
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>weight</th>
          <th>Favorite Food</th>
          <th>Favorite Drink</th>
          <th>city</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.height}</td>
          <td>{data.weight}</td>
          <td>{data.fav_food}</td>
          <td>{data.fav_drink}</td>
          <td>{data.city}</td>
        </tr>
      </tbody>
    </table>
  );
}
