import React from "react";

import type { ImageInfo } from "../types";
export const ImageDisplay: React.FC<{ image: ImageInfo }> = ({ image }) => {


  const getAttribution = (image: ImageInfo) => {
    if (image.attribution && image.sourceLink) {
      return (
        <a href={image.sourceLink} target="_blank" rel="noreferrer">
          {image.attribution}
        </a>
      );
    } else if (image.attribution) {
      return <span>{image.attribution}</span>;
    } else if (image.sourceLink) {
      return <a href={image.sourceLink}>Source</a>;
    } else {
      return null;
    }
  }

  return (
    <figure>      
      
      <figcaption className="bar attribution">
          {getAttribution(image)}        
      </figcaption>
      <img src={image.url} />
    </figure>
  );
};
