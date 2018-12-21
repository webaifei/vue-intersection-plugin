import { stringify } from "qs";
export const log = args => {
  console.log(args);
  const Img = new Image();
  Img.src = `https://www.u51.com/?${stringify(args)}`;
};
