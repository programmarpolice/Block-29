import { useState } from "react";
import { useAddPartyMutation } from "./PartySlice";
import { useNavigate } from "react-router-dom";

export default function PartyForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [addParty, { isLoading }] = useAddPartyMutation();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function postParty(event) {
    event.preventDefault();

    try {
      const party = await addParty({
        name,
        description,
        imageUrl,
      }).unwrap();
      navigate(`/events/${party.id}`);
    } catch (e) {
      setError(e.message);
    }
  }
  return (
    <>
      <p> Party Form </p>
    </>
  );
}
