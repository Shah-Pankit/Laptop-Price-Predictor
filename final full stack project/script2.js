    document.addEventListener('DOMContentLoaded', function() {
        // Add event listener to the "PREDICT NOW" button
        const predictButton = document.querySelector('.submit_final');
        predictButton.addEventListener('click', function() {
            // Gather selected data
            const selectedGPU = document.querySelector('#gpu-options .btn.active').textContent.trim();
            const selectedCore = document.querySelector('#core-options .btn.active').textContent.trim();
            const selectedRAM = document.querySelector('#RAM-options .btn.active').textContent.trim();
            const selectedROM = document.querySelector('#ROM-options .btn.active').textContent.trim();
            const selectedBrand = document.getElementById('selectedBrandDisplay').textContent.trim();

            // Prepare data object to send to backend
            const data = {
                GPU: selectedGPU,
                Core: selectedCore,
                RAM: selectedRAM,
                ROM: selectedROM,
                Brand: selectedBrand
            };

            // Send data to backend using an HTTP request
            sendDataToBackend(data);
        });
    });

    // Function to send data to backend
    function sendDataToBackend(data) {
        // Replace 'your-backend-endpoint' with the actual endpoint URL of your backend server
        const endpoint = '/predict';  // Assuming the Flask server is running on localhost

        // Make an HTTP POST request to the backend
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data sent to backend successfully:', data);
        })
        .catch(error => {
            console.error('There was a problem sending data to the backend:', error.message);
        });
    }
