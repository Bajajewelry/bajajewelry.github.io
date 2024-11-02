document.addEventListener("DOMContentLoaded", function () {
    const totalImages = 250; // Total number of images in the folder
    const imagesToShow = 6;  // Number of random images to display
    const imageFolder = "images/"; // Path to the image folder
    const imagePrefix = "project"; // Prefix used for images
    const possibleExtensions = [".png", ".jpg"]; // Possible image file extensions
    const gallery = document.getElementById("project-gallery"); // Get the div by its ID

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

        // Loop through possible extensions to find a valid one
        for (let ext of possibleExtensions) {
            img.src = `${imageFolder}${imagePrefix}${num}${ext}`;
            img.alt = `Jewelry Design ${num}`;
            
            img.onerror = () => { img.style.display = 'none'; }; // Hide image if it fails to load

            // Append the image to the gallery div
            gallery.appendChild(img);
            break;
        }
    });
});
