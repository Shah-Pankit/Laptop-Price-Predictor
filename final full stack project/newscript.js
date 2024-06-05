document.addEventListener("DOMContentLoaded", function () {
    const selectedValues = {
        gpu: null,
        core: null,
        RAM: null,
        ROM: null,
        brand: null
    };

    function displaySelectedBrand(brandName) {
        document.getElementById('selectedBrandDisplay').innerHTML = 'Selected Brand: ' + brandName;
        var buttons = document.querySelectorAll('.dropdown-item');
        buttons.forEach(button => {
            button.style.border = 'none';
        });
        var selectedButton = event.target;
        selectedButton.style.border = '2px solid black';
        selectedValues.brand = brandName;
        console.log(selectedValues);
    }

    const buttonGroups = document.querySelectorAll(".btn-group");
    buttonGroups.forEach(function (group) {
        const buttons = group.querySelectorAll(".gpu-option, .core-option, .RAM-option, .ROM-option");
        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                buttons.forEach(function (btn) {
                    btn.classList.remove("selected");
                });
                this.classList.add("selected");
                const value = this.getAttribute("value");
                const div = group.getAttribute("id").replace("-options", "");
                selectedValues[div] = value;
                console.log(selectedValues);
            });
        });
    });

    const brandButtons = document.querySelectorAll('.dropdown-item');
    brandButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const brandName = this.getAttribute('data-value');
            displaySelectedBrand(brandName);
        });
    });

    const predictButton = document.getElementById('predictButton');
    predictButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const selectedGpu = selectedValues.gpu;
        const selectedCpu = selectedValues.core;
        const selectedRam = selectedValues.RAM;
        const selectedRom = selectedValues.ROM;
        const selectedBrand = selectedValues.brand;

        const output = `Selected no of GPU: ${selectedGpu}\n`
            + `Selected CPU cores: ${selectedCpu}\n`
            + `Selected size of RAM: ${selectedRam}\n`
            + `Selected size of ROM: ${selectedRom}\n`
            + `Selected Brand: ${selectedBrand}`;

        const encodedOutput = encodeURIComponent(output);
        window.location.href = `page3.html?output=${encodedOutput}`;
    });
});
