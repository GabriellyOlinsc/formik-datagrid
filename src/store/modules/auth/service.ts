import { api } from "../../../services/api";
import { LoginRequest } from "./types";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ data: string}, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/ifleet',
        method: 'POST',
        data: credentials
      })
    }),
  })
})

export const { useLoginMutation } = authApi