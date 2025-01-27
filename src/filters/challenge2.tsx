/** 

For this next challenge, take on a slightly more complex task. For example, you
might want to go through the image and extract a color palette from it, or you
could make a black and white filter which first determines the average brightness
before setting pixels. Or you might look at something like a motion blur which
takes pixels e.g. to the left of a pixel and "blurs" them in, or an edge detector
which highlights pixels that are different from those around them.

In most cases, you will want to use one of two techniques:
A. Two passes: make a first pass through to collect information (such as
   the average brightness) and second go through and make changes.
B. Make a copy: Duplicate the pixel data so that you can reference the
   original data while editing the new data.

Choices:
- Edge Detection
- Blur
- Make a border whose color is the average color of the image.
- Black & White filter with a cut-off based on brightness of the image.

   */

import { percentageOption } from "../filterOptions";
import type { Filter, FilterOption, FilterFunction } from "../types";
import { hexToRGBA } from "../utils";

const filterImage: FilterFunction = (pixels, width, height) => {
  // If you need to make a copy, you can do this...
  // let copy = new Uint8ClampedArray([...pixels]);

  // Now implement some logic such as edge detection, blur, etc.

  return pixels;
};

export const challengeTwoFilter: Filter = {
  name: "Challenge #1",
  apply: filterImage,
};
