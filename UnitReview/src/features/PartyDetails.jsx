import { useState } from "react";
import { useDeletePartyMutation, useGetPartyQuery } from "./PartySlice";
import { useParams } from "react-router-dom";

export default function PartyDetails() {
  const { id } = useParams();

  const { data: party, isLoading, error } = useGetPartyQuery(id);

  const [deleteParty] = useDeletePartyMutation();

  function removeParty(id) {
    deleteParty(id);
  }

  if (isLoading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <article>
      <h1>{party.name}</h1>
      {party ? (
        <>
          <h2>{id}</h2>
          <p>{party.description}</p>
          <p>{party.location} </p>
          <p> {party.date} </p>
          <button onClick={() => removeParty(party.id)}>
            <Link to="/">Delete Party</Link>
          </button>
        </>
      ) : (
        <p>There is no selected event.</p>
      )}
    </article>
  );
}
