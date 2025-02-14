document.getElementById("openPopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
    document.body.style.backgroundColor = "#ffe6e6"; // Change background color to light pink
    document.querySelector(".image-container").style.display = "none"; // Hide the image and button
    document.title = "is for u"; // Change tab title
});

document.getElementById("flowerButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("afterPopup").style.display = "flex"; // Show the new image
    document.body.style.backgroundColor = "#ffffff"; // Change background to white
});
