document.addEventListener('DOMContentLoaded', function () {
    window.showStage = function(stage) {
        const stages = document.querySelectorAll('.form-stage');
        stages.forEach((el) => el.style.display = 'none');
        const currentStage = document.getElementById(stage); // Directly use the ID
        if (currentStage) {
            currentStage.style.display = 'block';
        } else {
            console.error(`Element with ID '${stage}' not found.`);
        }
    }

    window.nextStage = function(stage) {
        // Perform validation before proceeding to the next stage
        if (validateStage(stage - 1)) {
            showStage(`stage-${stage}`);
        }
    }

    window.prevStage = function(stage) {
        showStage(`stage-${stage}`);
    }

    function validateStage(stageNumber) {
        let isValid = true;
        const stage = document.getElementById(`stage-${stageNumber}`);
        const inputs = stage.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            if (!input.value) {
                alert('All fields must be filled out.');
                input.focus();
                isValid = false;
                return false;
            }

            // Additional validations
            if (input.type === 'date') {
                if (input.id === 'dob' && new Date(input.value) > new Date()) {
                    alert('Date of Birth cannot be in the future.');
                    input.focus();
                    isValid = false;
                    return false;
                }
                if (input.id === 'departureDate' || input.id === 'returnDate') {
                    const departureDate = document.getElementById('departureDate').value;
                    const returnDate = document.getElementById('returnDate').value;
                    if (departureDate && returnDate && new Date(departureDate) > new Date(returnDate)) {
                        alert('Departure date cannot be after the return date.');
                        document.getElementById('departureDate').focus();
                        isValid = false;
                        return false;
                    }
                }
            }
        });

        return isValid;
    }

    document.getElementById('mars-application-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Perform final validation here if needed
        if (validateStage(3)) {
            // If everything is fine, show the success message
            showStage('success-message');
        }
    });

    // Initial setup to show the first stage
    showStage('stage-1');
});
