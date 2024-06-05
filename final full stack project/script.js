// Object to keep track of the last selected button in each group
const lastSelectedButtons = {};

// Function to handle button clicks for a group of options
function handleButtonClick(groupName, button) {
    const buttons = document.querySelectorAll(`#${groupName} button`);
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    // Update last selected button for this group
    lastSelectedButtons[groupName] = button;
}

// Event listeners for each group of buttons
document.querySelectorAll('.price_predictor').forEach(group => {
    group.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const groupName = group.getAttribute('id');
            handleButtonClick(groupName, event.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons with the class 'btn' and add a click event listener to each
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const groupName = button.parentNode.id;
            const lastSelectedButton = lastSelectedButtons[groupName];
            // Check if the clicked button is the last selected button in the group
            if (lastSelectedButton !== this) {
                // Remove any existing 'active' class from other buttons in the same group
                const groupButtons = document.querySelectorAll(`#${groupName}button`);
                groupButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                // Add 'active' class to the clicked button
                this.classList.add('active');
                // Update last selected button for this group
                lastSelectedButtons[groupName] = this;
            }
        });
    });
});

// Event listener for brand dropdown
document.querySelectorAll('#brandList .dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
        // Get the selected brand
        const selectedBrand = this.dataset.value;
        // Update the selected brand display
        document.getElementById('selectedBrandDisplay').textContent = selectedBrand;
    });
});




function displaySelectedBrand(brand) {
    // Display the selected brand in the designated div
    document.getElementById('selectedBrandDisplay').innerText = brand;

    // Prevent the default behavior of the <a> element
    event.preventDefault();

    
}


