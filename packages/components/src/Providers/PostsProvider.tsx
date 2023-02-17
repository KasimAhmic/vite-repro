import { useGetPostsQuery } from "@ahmic/commons";
import { FC } from "react";

export const PostsProvider: FC = () => {
  useGetPostsQuery();

  return null;
};
