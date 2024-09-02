// script.js

function showImages() {
    // Get all elements with class 'image-container'
    var containers = document.querySelectorAll('.image-container');

    // Toggle the display property for each container
    containers.forEach(function(container) {
        if (container.style.display === 'none') {
            container.style.display = 'block'; // Show the container
        } else {
            container.style.display = 'none'; // Hide the container
        }
    });
}


