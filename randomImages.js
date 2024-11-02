document.addEventListener("DOMContentLoaded", function () {
    const totalImages = 250; // Total number of images in the folder
    const imagesToShow = 6;  // Number of random images to display
    const imageFolder = "images/"; // Path to the image folder
    const imagePrefix = "project1-"; // Updated prefix to match your filenames
    const possibleExtensions = [".png", ".jpg"]; // Possible image file extensions
    const gallery = document.getElementById("project-gallery"); // Get the div by its ID

    // Generate an array of unique random numbers
    const randomNumbers = [];
    while (randomNumbers.length < imagesToShow) {
        const randomNum = Math.floor(Math.random() * totalImages) + 300; // Adjusted to start at 300
        if (!randomNumbers.includes(randomNum)) {
            randomNumbers.push(randomNum);
        }
    }

    // Load the selected random images into the gallery
    randomNumbers.forEach(num => {
        const img = document.createElement("img");
        img.classList.add("project-image");

        for (let ext of possibleExtensions) {
            img.src = `${imageFolder}${imagePrefix}${num}${ext}`;
            img.alt = `Jewelry Design ${num}`;
            
            // Attempt to load image; hide if it fails
            img.onerror = () => { img.style.display = 'none'; }; 

            gallery.appendChild(img);
            break;
        }
    });
});
