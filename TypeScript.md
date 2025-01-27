# A Very Brief Intro to TypeScript

TypeScript is designed to help programmers know what types of data they're working with. That way when you're working with an argument, a return value, or a variable, your editor can give you good hints and warn you if you make mistakes, like trying to treat strings as numbers or forgetting that something is an array.

For this project, there are some type hints which help the editor remind you what pixels, width, height, etc. are. 

For the most part, the TypeScript code is already written for you and won’t require changes. However, here’s a quick overview of how it works to help you understand the provided type hints.

## Normal JavaScript
```js
const filterImage = (pixels, width, height) => {...}
```

## TypeScript
```ts
const filterImage : FilterFunction = (pixels, width, height) => {...}
```

The `: FilterFunction` is a *type hint* which tells the editor what kind of function you're writing -- in this case, it tells it that it should expect
pixels, width and height as arguments and that it will *return* pixels. 

If you write a function that doesn't return an array of pixels, you'll see an
error: that's typescript helping you out :)

## Defining a Type

If you make your own filter options, you'll want to define a type for an options
object. That will look like this...

```ts
type MyFilterOptions = {
  strength: number,
  color: string,
}
```

What that says is: an object of type `MyFilterOptions` will have a `strength` 
and a `color` property. If you then give this hint to the `FilterFunction` type
by writing, you will get good autocomplete and error correction when using 
options.

```ts
const filterImage : FilterFunction<MyFilterOptions> = (pixels, w, h, options) => {...}
```
This is especially helpful if you start writing a complex function with multiple 
options. See the [grid](./src/filters/samples/grid.tsx) for an example.