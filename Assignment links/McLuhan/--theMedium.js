// Get the photos div
var photosDiv = document.getElementById("photos");

// Create an array of photo filenames
var photoFilenames = ["Blue Caterpillar.png", "Evil Queen.png", "Goth Chick.png", "NYT Headline.png"];

// Loop through the photo filenames and create an img element for each one
for (var i = 0; i < photoFilenames.length; i++) {
  var img = document.createElement("img");
  img.src = photoFilenames[i];
  photosDiv.appendChild(img);
}
