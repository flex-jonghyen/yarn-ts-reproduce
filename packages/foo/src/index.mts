export interface Result {
  name: string;
}

export const foo = (): Result => {
  return { name: "foo" };
};
