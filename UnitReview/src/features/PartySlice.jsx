import api from "../store/api";

const partyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getParties: build.query({
      query: () => "events",
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      providesTags: ["Party"],
    }),
    getParty: build.query({
      query: (id) => "events/" + id,
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error,
      providesTags: ["Party"],
    }),
    addParty: build.mutation({
      query: (party) => ({
        url: "events",
        method: "POST",
        body: party,
      }),
      invalidatesTags: ["Party"],
      transformResponse: (response) => response.data,
    }),
    deleteParty: build.mutation({
      query: (id) => ({
        url: "events/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Party"],
    }),
  }),
});

export const {
  useGetPartiesQuery,
  useGetPartyQuery,
  useAddPartyMutation,
  useDeletePartyMutation,
} = partyApi;
