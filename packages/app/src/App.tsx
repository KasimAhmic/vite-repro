import { Button, LoadPostsButton, Paper } from "@ahmic/components";
import React, { FC } from "react";
import { PostsView } from "./components";

export const App: FC = () => {
  return (
    <Paper>
      <Button>Testing 123</Button>
      <LoadPostsButton />

      <PostsView />
    </Paper>
  );
};
