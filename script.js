const inputs = document.querySelectorAll(".controls input");

function handleColor(){
    document.documentElement.style.setProperty(
        `--${this.name}`, this.value
    )
     
}
inputs.forEach(input => input.addEventListener("change", handleColor))
// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.
