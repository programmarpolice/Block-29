import { useState } from "react";
import { useGetPartyQuery } from "./PartySlice";
import { useParams } from "react-router-dom";

export default function PartyDetails() {
  const { id } = useParams();

  const { data: party, isLoading, error } = useGetPartyQuery(id);

  if (isLoading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <article>
      <h1>{id}</h1>
      {party ? (
        <>
          <h2>{party.name}</h2>
          <img src={party.imageUrl} alt={party.name} />
          <p>{party.description}</p>
        </>
      ) : (
        <p>There is no selected event.</p>
      )}
    </article>
  );
}
