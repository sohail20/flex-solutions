import { api } from "../store/middleware/api";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation({
      query: (body) => ({
        url: `/users`,
        method: "POST",
        body,
      }),
    }),
    getUpdatedUser: build.query({
      query: () => "/users/me",
      transformResponse: (res) => {
        console.log("res", res);
      },
    }),
    login: build.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const loginResponse = await fetchWithBQ({
          url: "/auth",
          method: "POST",
          body: _arg,
        });

        try {
          if (loginResponse.error) throw loginResponse.error;
          if (loginResponse.data) {
            localStorage.setItem("token", loginResponse.data.token);
            localStorage.setItem(
              "user",
              JSON.stringify(loginResponse.data.user)
            );
            return loginResponse.data;
          }
        } catch (error) {
          return error.status
            ? { error }
            : { error: { status: 400, data: error } };
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useSignupMutation, useLoginMutation, useGetUpdatedUserQuery } =
  extendedApi;
