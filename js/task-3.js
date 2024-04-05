const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    let value = event.currentTarget.value.trim();
    
    if (value === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = value;
    }
    
});
