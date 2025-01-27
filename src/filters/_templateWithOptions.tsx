import { booleanOption, colorOption, percentageOption } from "../filterOptions";
import type { Filter, FilterOption, FilterFunction } from "../types";
import { hexToRGBA } from "../utils";

type MyFilterOptions = {
  /* Define options here, as we will get them
  in our apply function -- this needs to match
  the list of options provided below. I'll provide
  three example options to show one of each type */
  color: string;
  strength: number;
  darkMode: boolean;
};

const filterOptions: FilterOption[] = [
  colorOption("overlayColor", "#ff0000"),
  percentageOption("strength", 0.5),
  booleanOption("darkMode", false),
];

const filterImage: FilterFunction<MyFilterOptions> = (
  pixels,
  width,
  height,
  options: MyFilterOptions
) => {
  if (options.darkMode) {
    // do something if we're in dark mode...
  } else {
    // do something else if we're not in dark mode...
  }
  return pixels;
};

export const myFilter: Filter<MyFilterOptions> = {
  name: "My Filter",
  apply: filterImage,
  options: filterOptions,
};
