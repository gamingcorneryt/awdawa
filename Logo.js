const logo = document.getElementById("logo");

// When mouse hovers over the logo
logo.addEventListener("mouseover", () => {
    logo.src = "Images/Decals/SnaleGif.gif"; // Change to GIF
});

// When mouse leaves the logo
logo.addEventListener("mouseout", () => {
    logo.src = "Images/Decals/Logo.png"; // Revert to static image
});
