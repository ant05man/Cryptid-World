var cryptids = {
    "Alabama": "Chupacabra",
    "Alaska": "Yeti",
    "New Jersey": "Jersey Devil"
    // Add more states and cryptids as needed
};

// Function to populate the dropdown with states
function populateStatesDropdown() {
    var stateSelect = document.getElementById("stateSelect");

    for (var state in cryptids) {
        var option = document.createElement("option");
        option.value = state;
        option.text = state;
        stateSelect.add(option);
    }
}

// Call the function to populate the dropdown on page load
populateStatesDropdown();

function searchCryptid() {
    var stateSelect = document.getElementById("stateSelect");
    var selectedState = stateSelect.options[stateSelect.selectedIndex].value;
    var cryptidResult = document.getElementById("cryptidResult");

    if (cryptids[selectedState]) {
        cryptidResult.innerHTML = `<p>The cryptid in ${selectedState} is ${cryptids[selectedState]}.</p>`;
    } else {
        cryptidResult.innerHTML = "<p>No cryptid found for the specified state.</p>";
    }
}
