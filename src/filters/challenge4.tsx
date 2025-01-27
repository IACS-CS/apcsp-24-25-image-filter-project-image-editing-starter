/**
 * The Ultimate Challenge:
 * This time, you should try to make a filter with an actual custom purpose.
 * I recommend you customize the image set in images to fit your goal.
 * For example, you could try to make a filter that makes sunset pictures
 * look more dramatic, or a filter that makes black and white images look
 * like they were taken with an old camera.
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

export const ultimateChallenge: Filter<MyFilterOptions> = {
  name: "Ultimate Challenge",
  apply: filterImage,
  options: filterOptions,
};
