document.addEventListener("DOMContentLoaded", function () {
    const totalImages = 250; // Total number of images in the folder
    const imagesToShow = 6; // Number of random images to display
    const imageFolder = "images/"; // Path to the image folder
    const imagePrefix = "project"; // Prefix used for images
    const possibleExtensions = [".png", ".jpg"]; // Possible image file extensions
    const gallery = document.getElementById("project-gallery");

    // Generate an array of unique random numbers
    const randomNumbers = [];
    while (randomNumbers.length < imagesToShow) {
        const randomNum = Math.floor(Math.random() * totalImages) + 1;
        if (!randomNumbers.includes(randomNum)) {
            randomNumbers.push(randomNum);
        }
    }

    // Load the selected random images into the gallery
    randomNumbers.forEach(num => {
        const img = document.createElement("img");
        img.classList.add("project-image");
        let imageLoaded = false;
        
        // Try loading each possible extension until one works
        possibleExtensions.forEach(ext => {
            if (!imageLoaded) {
                img.src = `${imageFolder}${imagePrefix}${num}${ext}`;
                img.onerror = () => img.src = ""; // Clear if not found
                img.onload = () => imageLoaded = true;
            }
        });
        
        // Add caption
        const caption = document.createElement("div");
        caption.textContent = `Jewelry Design ${num}`;
        caption.classList.add("caption");

        // Add image and caption to gallery
        const container = document.createElement("div");
        container.classList.add("image-container");
        container.appendChild(img);
        container.appendChild(caption);
        gallery.appendChild(container);
    });
});
