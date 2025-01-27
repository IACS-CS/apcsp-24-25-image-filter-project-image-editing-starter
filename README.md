# image-editing starter

A starter template for students working on a simple set of "Image Editing" code in a functional environment! Read over this "how to" guide to get started, then work your way through the [Challenges](./CHALLENGES.md).

Note: this project is written in TypeScript, which is a super-set of JavaScript.
Read about [TypeScript](./TypeScript.md) here.

## Adding Filters

Your job will be to add "filters" to our project. 

All your filter code should go in the src/filters subdirectory. Files for each challenge (e.g., challenge0, challenge1, challenge2) have already been set up for you.

(Note: if you want to make more filters than there are challenges, you can add
your own import statements to src/filters/index.tsx and you can copy the
spare templates that are in the src/filters/ directory).
you get started.

### My First Filter

To get started, let's try adding a simple "brighten" filter that brightens the image.

Open the challenge0 file. You should already find a loop which is designed to
look at each channel of each pixel (i.e. red, blue, green). To brighten it, you
can simply add to each one.

The pixels data is simply an array of numbers. Each number is a value between 0 and 255 and we have a Red, Green, Blue
and Alpha value. For our first "brighten" filter, we can simply add a number to every single value. Because we are
working with a Clamped Array, JavaScript will make sure that any numbers we produce _outside_ of the range get "clamped", so, for example, if we try to add 50 to the value 220, we will get 255 instead of 270.

## Working with pixels

In the brighten filter, we changed every value (red, green, blue, alpha), not caring what it was. Usually, we'll care about the details. For this reason, it can be useful to iterate through the array one pixel at a time rather than one value at a time. Since the array always contains R,G,B,A values in that order, we can move through the array by looking at every fourth value, like this...

```typescript
for (const redIndex = 0; i < pixels.length; i += 4) {
  // Our "red" value is redIndex...
}
```

If we wanted to add a "purple" hue by updated only red and blue values, we could do this...

```typescript
for (const redIndex = 0; i < pixels.length; i += 4) {
  // Our "blue" index is 2 more than red
  // since we go R,G,B,A
  const blueIndex = redIndex + 2;
  pixels[redIndex] += 50;
  pixels[blueIndex] += 50;
}
```

If we insert that code into our filter, we will add a "purple" hue to the image.

## Working with rows, columns and pixels

If we need to know not just _what_ a value is (red, green, blue), but _where_ it is, we can use for loops to iterate through rows and columns and then we can use a little math to find the correct values, like so:

```typescript
  ...
  apply : (pixels, width, height) => {
    for (let row=0; row<height; row++) {
      for (let col=0; col<width; col++) {
        // Each pixel is 4 items wide and each row
        // is COLUMN pixels wide, so...
        // our position is
        // (ROW * (4 * WIDTH) + (COL * 4)
        const redIndex = row * 4 * width + col * 4;
        const greenIndex = redIndex + 1;
        const blueIndex = redIndex + 2;
        const alphaIndex = redIndex + 3;
        // Now we can do something with these pixel indices...
        // ...
      }
    }
    return pixels;
  }

```

## Changing Images

If you want to change the images in this project, you will want to add image files to

`/public/images/`

And then add an item to the list in `images.tsx` that corresponds with the
file you added. Be sure you have the right to use any image you upload (i.e. the image must be in the public domain or under a creative commons license that allows reuse or must be an image you yourself created or own the rights to).

If you are looking for new images, wikipedia is an excellent source of images with
clear licensing rights.

## Working with Options

We have an infrastructure for displaying options to the user. Using this involves two parts: (1) defining the options that will be displayed to the user (2) specifying the type of options you expect your `apply` method to get back when the filter is applied. Take a look at [the template with options](./src/filters/_templateWithOptions.tsx) for some starter code.

You can see a good example of this in the [grid](./src/filters/samples/grid.tsx) sample filter.
