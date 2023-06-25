import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const networkApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
    }),
    getPosts: builder.query({
      query: (id) => `users/${id}/posts`,
    }),
    getAlbums: builder.query({
      query: (id) => `users/${id}/albums`,
    }),
  }),
})

export const { useGetUsersQuery, useGetPostsQuery, useGetAlbumsQuery } = networkApi;