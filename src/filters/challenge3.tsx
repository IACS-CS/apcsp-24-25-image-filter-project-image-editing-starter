/**
 * Integrating Options:
 * For this challenge, take one of your existing filters and allow
 * the user to customize it with options. For example, you might
 * allow the user to set a threshold for a threshold filter, or
 * a color for a color filter. You could also allow the user to
 * set a strength for a blur filter, or a color for a sepia filter.
 */

import { percentageOption } from "../filterOptions";
import type { Filter, FilterOption, FilterFunction } from "../types";
import { hexToRGBA } from "../utils";

type MyFilterOptions = {
  /* Define options here, as we will get them
  in our apply function -- this needs to match
  the list of options provided below. I'll provide
  three example options to show one of each type */
  // e.g.
  // strength: number
};

const filterOptions: FilterOption[] = [
  // e.g. percentageOption("strength", 0.5),
];

const filterImage: FilterFunction<MyFilterOptions> = (
  pixels,
  width,
  height,
  options: MyFilterOptions
) => {
  // Now try to write a loop that goes through each pixel and
  // applies the filter to it using an *if* statement!
  return pixels;
};

export const challengeThreeFilter: Filter<MyFilterOptions> = {
  name: "Challenge #3",
  apply: filterImage,
  options: filterOptions,
};
