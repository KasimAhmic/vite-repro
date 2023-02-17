import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsAdapter = createEntityAdapter<Post>();
export const commentsAdapter = createEntityAdapter<Comment>();
export const usersAdapter = createEntityAdapter<User>();

export const dummyApi = createApi({
  reducerPath: "dummyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    getPosts: builder.query<EntityState<Post>, void>({
      query: () => "/posts",
      transformResponse: (response: Post[]) =>
        postsAdapter.setAll(postsAdapter.getInitialState(), response),
    }),

    getComments: builder.query<EntityState<Comment>, number>({
      query: (postId: number) => `/posts/${postId}/comments`,
      transformResponse: (response: Comment[]) =>
        commentsAdapter.setAll(commentsAdapter.getInitialState(), response),
    }),

    getUsers: builder.query<EntityState<User>, void>({
      query: () => "/users",
      transformResponse: (response: User[]) =>
        usersAdapter.setAll(usersAdapter.getInitialState(), response),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetCommentsQuery,
  useGetUsersQuery,
  reducer: dummyApiReducer,
  reducerPath: dummyApiReducerPath,
  middleware: dummyApiMiddleware,
  endpoints: dummyApiEndpoints,
} = dummyApi;

export const postsSelectors = postsAdapter.getSelectors();
export const commentsSelectors = commentsAdapter.getSelectors();
export const usersSelectors = usersAdapter.getSelectors();

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
