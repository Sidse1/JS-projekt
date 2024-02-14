const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const adImages = ['ny_1.png', 'ny_2.png', 'ny_3.png']; // Array of ad images
const totalImages = adImages.length;
let currentImageIndex = sessionStorage.getItem('currentImageIndex') || 0;

// Function to open popup
function openPopup() {
  // Fetch the content of the current image file
  fetch(adImages[currentImageIndex])
    .then(response => response.blob())
    .then(blob => {
      const reader = new FileReader();
      reader.onload = function() {
        // Display the content of the file in an alert
        alert(reader.result);
      };
      reader.readAsDataURL(blob);
    })
    .catch(error => {
      console.error('Error fetching file:', error);
    });
  
  popup.style.display = 'block';
  popupImage.src = adImages[currentImageIndex];
  currentImageIndex = (parseInt(currentImageIndex) + 1) % totalImages;
  sessionStorage.setItem('currentImageIndex', currentImageIndex);
}

// Function to close popup
function closePopup() {
  popup.style.display = 'none';
}

// Open popup when the page loads
window.onload = openPopup;

// Event handler for clicking outside the popup to close it
window.onclick = function(event) {
  if (event.target == popup) {
    closePopup();
  }
};

// Event handler for clicking on the popup image to close it
popupImage.onclick = function() {
  if (currentImageIndex === totalImages - 1) {
    // If the current image is the last one, start from the beginning
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  popupImage.src = adImages[currentImageIndex];
};
