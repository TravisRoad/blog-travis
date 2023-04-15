/**
 * utils/imageMetadata.js
 * Code written by Nikolov Lazar
 * https://nikolovlazar.com/blog/generating-blur-for-dynamic-images-nextjs
 */

import { getPlaiceholder } from "plaiceholder";
import { visit } from "unist-util-visit";

// Just to check if the node is an image node
function isImageNode(node) {
  const img = node;
  return (
    img.type === "element" &&
    img.tagName === "img" &&
    img.properties &&
    typeof img.properties.src === "string"
  );
}

// Returns the props of given `src` to use for blurred images
export async function returnProps(src) {
  const { base64: blurDataURL, img } = await getPlaiceholder(src);

  // If an error happened calculating the resolution, throw an error
  if (!img) throw Error(`Invalid image with src "${src}"`);

  return {
    blurDataURL,
  };
}

async function addProps(node) {
  // return the new props we'll need for our image
  const { blurDataURL } = await returnProps(node.properties.src);

  node.properties.blurDataURL = blurDataURL;
  node.properties.placeholder = "blur";
}

const imageMetadata = () => {
  return async function transformer(tree) {
    // Create an array to hold all of the images from the markdown file
    const images = [];

    visit(tree, "element", (node) => {
      // Visit every node in the tree, check if it's an image and push it in the images array
      if (isImageNode(node)) {
        images.push(node);
      }
    });

    for (const image of images) {
      // Loop through all of the images and add their props
      await addProps(image);
    }

    return tree;
  };
};

export default imageMetadata;
