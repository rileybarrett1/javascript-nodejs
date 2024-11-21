"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#image_rollovers img");
    const preloadedImages = [];

    // Preload rollover images based on img ID attributes


    // Set up rollover effect with hover events
    for (let image of images) {
        const oldURL = image.src;
        const newURL = image.id;
        const img = new Image()
        
        img.src = newURL;  // Preload rollover image by setting src
        preloadedImages.push(img);
        image.addEventListener("mouseover", () => {
            image.src = newURL;
        });
        image.addEventListener("mouseout", () => {
            image.src = oldURL;
        });

        // Timer to change image after 1 second, and revert after 2 seconds
        setTimeout(() => {
            image.src = newURL;
            setTimeout(() => {
                image.src = oldURL;
            }, 1000); // Revert to original image after 2 seconds from page load
        }, 1000); // Change image to rollover after 1 second from page load
    }
});
