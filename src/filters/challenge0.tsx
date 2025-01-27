import type { Filter, FilterFunction, FilterOption } from "../types";

/*
For your first challenge choose one of the below...

These challenges involve simple adjustments in pixel values. They are designed to get you familiar with manipulating pixel data.

1. **Brighten Filter**: Increase the brightness of an image by adding a fixed value to each color channel.
2. **Darken Filter**: Decrease the brightness of an image by subtracting a fixed value from each color channel.
3. **Noise Filter**: Add random values to pixel values to change the image.
4. **Posterize Filter**: Reduce the color complexity of the image by rounding all numbers to fixed values.
   For example, to make a poster that has only 8 colors, you would want to round each channel value to one of 2
   possible values (i.e. either round it up to 255 or down to 0).
*/

const filterImage: FilterFunction = (pixels, width, height) => {
  /* Modify pixels... */

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      for (let channel = 0; channel < 3; channel++) {
        const redIndex = row * 4 * width + col * 4 + channel;
        const greenIndex = redIndex + 1;
        const blueIndex = redIndex + 2;
        
        // Now we can do something with the value...
        // e.g. increase each pixel by 40...
        // pixels[redIndex] = pixels[redIndex] + 40;
        // OR we can increase each pixel by a random amount...
        // pixels[blueIndex] = pixels[blueIndex] + Math.random() * 30; //
      }
    }
  }
  return pixels;
};

export const challengeZero: Filter = {
  name: "Challenge #0",
  apply: filterImage,
};
