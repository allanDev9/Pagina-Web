const Range = document.getElementById("range");
const ageDisplay = document.getElementById("age");

range.addEventListener("input", function(){
    const age = range.value;
    ageDisplay.textContent = age;
});

const Title = document.querySelector(".title");

const colors = ["black", "red","aqua", "white",
                "brown","green", "blue", "purple"];
let colorIndex = 0;

function cambiarColor(){
    colorIndex = (colorIndex + 1) % colors.length;
    Title.style.color = colors[colorIndex];
}