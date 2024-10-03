import { useState } from "react";
import { useGetPartyQuery } from "./PartySlice";
import { useParams } from "react-router-dom";

export default function PartyDetails() {
  const { id } = useParams();

  const { data: event, isLoading, error } = useGetPartyQuery;
  return <div> Party Details </div>;
}
