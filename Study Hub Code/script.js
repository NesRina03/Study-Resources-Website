// Function to handle the search button click
function searchResources() {
    // Get the selected level and specialty values
    var level = document.getElementById("level").value;
    var specialty = document.getElementById("specialty").value;

    // Redirect to the search results page with the selected level and specialty
    window.location.href = level + "-" + specialty + ".html";
}


// Function to initialize the search page with selected options
function initializeSearchPage() {
    // Get the level and specialty values from the URL parameters
    var urlParams = new URLSearchParams(window.location.search);
    var level = urlParams.get("level");
    var specialty = urlParams.get("specialty");

    // Set the selected options in the dropdowns
    document.getElementById("level").value = level;
    document.getElementById("specialty").value = specialty;

    // Load the corresponding drives for the selected level and specialty
    loadDrives(level, specialty);
}

// Function to load drives based on the selected level and specialty
function loadDrives(level, specialty) {
    // Define an object with drive links for each level and specialty
    var drives = {
        "L1-info-lmd": [
            "https://drive.google.com/drive/folders/1Jo8ckZoQXq970qClSmm2SCAFaLKQXH9b?usp=drive_link",
            "https://drive.google.com/drive/folders/1H5Hk9e32VYbvTRo0UwyyGliUMcdmVld6?usp=drive_link"
        ],
        // Add more levels and specialties as needed
    };

    // Get the container for drive links
    var drivesContainer = document.getElementById("drives-container");

    // Clear existing drive links
    drivesContainer.innerHTML = "";

    // Check if the selected level and specialty have associated drives
    if (drives[level + "-" + specialty]) {
        // Add drive links to the container
        drives[level + "-" + specialty].forEach(function (driveLink) {
            var driveLinkElement = document.createElement("a");
            driveLinkElement.href = driveLink;
            driveLinkElement.target = "_blank";
            driveLinkElement.innerText = "Drive Link";
            drivesContainer.appendChild(driveLinkElement);
        });
    } else {
        // Display a message if no drives are available
        var noDrivesMessage = document.createElement("p");
        noDrivesMessage.innerText = "No drives available for the selected level and specialty.";
        drivesContainer.appendChild(noDrivesMessage);
    }
}

// Call the initialization function when the page loads
window.onload = initializeSearchPage;



