import { runFooFromBar } from "@rep/baz";

export const runFooFromBaz = () => {
  const result = runFooFromBar();
  //     ^?
};
