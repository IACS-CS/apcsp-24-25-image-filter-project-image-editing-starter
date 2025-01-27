import type { Filter, FilterFunction } from "../types";

const filterImage: FilterFunction = (pixels, width, height) => {
  /* Modify pixels... */
  return pixels;
};

export const myFilter: Filter = {
  name: "My Filter",
  apply: filterImage,
};
