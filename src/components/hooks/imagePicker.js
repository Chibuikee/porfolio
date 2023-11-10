import React, { useEffect, useState } from "react";

export function useImageSelector() {
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    // Function to get the image path based on screen width
    function getImagePathByScreenWidth() {
      const screenWidth = window.innerWidth;
      const imagePathMap = {
        small: "path-to-small-image.jpg",
        medium: "path-to-medium-image.jpg",
        large: "path-to-large-image.jpg",
      };

      if (screenWidth < 768) {
        return imagePathMap.small;
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        return imagePathMap.medium;
      } else {
        return imagePathMap.large;
      }
    }

    // Set the image path based on the screen width
    const selectedImagePath = getImagePathByScreenWidth();
    setImagePath(selectedImagePath);

    // Add an event listener to update the image path on screen resize
    function handleResize() {
      const updatedImagePath = getImagePathByScreenWidth();
      setImagePath(updatedImagePath);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return imagePath;
  //   return (
  //     <div>
  //       <img src={imagePath} alt="Responsive Image" />
  //     </div>
  //   );
}

// export default ImageSelector;
