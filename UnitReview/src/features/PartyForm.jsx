import { useState } from "react";
import { useAddPartyMutation } from "./PartySlice";
import { useNavigate } from "react-router-dom";

export default function PartyForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const [addParty, { isLoading }] = useAddPartyMutation();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function postParty(event) {
    event.preventDefault();

    try {
      const party = await addParty({
        name,
        description,
      }).unwrap();
      navigate(`/events/${party.id}`);
    } catch (e) {
      setError(e.message);
    }
  }
  return (
    <form onSubmit={postParty}>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Description
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button>Add Party</button>
      {isLoading && <output>Sending party to API...</output>}
      {error && <output>{error}</output>}
    </form>
  );
}
