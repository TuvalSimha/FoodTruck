import { Person } from "@shared/models";
import Link from "next/link";

export type PersonProps = {
  person: Person;
};

export default function PersonComponent({ person }: PersonProps) {
  return (
    <li>
      <Link href="/person/[id]" as={`/person/${person.id}`}>
        <a>{person.name}</a>
      </Link>
    </li>
  );
}
