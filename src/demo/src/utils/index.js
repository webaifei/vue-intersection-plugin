import { stringify } from "qs";
export const log = args => {
  console.log(args);
  const Img = new Image();
  Img.src = `https://pic.u51.com/sfs-gateway/api/v1/download/6fb29955359d410cbe9cf3832cecf8e20552?${stringify(args)}`;
};
