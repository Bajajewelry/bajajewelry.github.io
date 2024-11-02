document.addEventListener("DOMContentLoaded", function () {
    const totalImages = 250; // Total number of images in your folder
    const imagesToShow = 6; // Number of random images to display
    const imageFolder = "images/"; // Path to the image folder
    const imagePrefix = "project"; // Assuming images are named project1.png, project2.png, etc.
    const imageExtension = ".png"; // Assuming images have .png extension
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
        img.src = `${imageFolder}${imagePrefix}${num}${imageExtension}`;
        img.alt = `Jewelry Design ${num}`;
        img.classList.add("project-image");
        gallery.appendChild(img);
    });
});
