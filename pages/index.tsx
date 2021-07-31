import { Person } from "@shared/models";
import useSWR from "swr";
import PersonComponent from "../components/person";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const localApiPath = "/api/truckOwners";
  const { data, error } = useSWR<Person[]>(localApiPath, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((p, i) => (
        <PersonComponent key={i} person={p} />
      ))}
    </ul>
  );
}
