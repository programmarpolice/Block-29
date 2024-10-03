import { useGetPartiesQuery } from "./PartySlice";
import { Link } from "react-router-dom";

export default function PartyList() {
  const { data: parties = [], isLoading, error } = useGetPartiesQuery();

  if (isLoading) {
    return <p>Loading Events...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!parties.length) {
    return <p> There are no events. </p>;
  }

  return (
    <ul>
      {parties.map((p) => (
        <li key={p.id}>
          <Link to={`/events/${p.id}`}>
            {p.name} #{p.id}
          </Link>
          <p>{p.description}</p>
        </li>
      ))}
    </ul>
  );
}
