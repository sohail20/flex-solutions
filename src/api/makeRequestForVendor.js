import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    makeRequestForVendor: build.mutation({
      query: (body) => ({
        url: `/request`,
        method: "POST",
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useMakeRequestForVendorMutation } = extendedApi;
