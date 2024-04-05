const findForm = document.querySelector("form");

findForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    let allFieldsFilled = true;

    Array.from(form.elements).forEach(input => {
        if (input.tagName === "INPUT" && input.value.trim() === "") {
            allFieldsFilled = false;
        }
    });

    if (!allFieldsFilled) {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {};
    Array.from(form.elements).forEach(input => {
        if (input.tagName === "INPUT") {
            formData[input.name] = input.value.trim();
        }
    });

    console.log(formData);
    form.reset();
};
