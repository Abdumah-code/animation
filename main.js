const firstLet = document.getElementById("w");
const secondLet = document.getElementById("o1");
const thirdLet = document.getElementById("o2");
const forthLet = document.getElementById("o3");
let fifthLet = document.querySelector("#s");
const sixthLet = document.getElementById("h");

let color = "#000000";

setInterval(function() {

    if (color === "#000000") {
        firstLet.setAttribute("fill", "#ff0000");
        secondLet.setAttribute("font-size", "90");
        thirdLet.setAttribute("font-size", "90");
        forthLet.setAttribute("font-size", "90");
        sixthLet.setAttribute("fill", "#ff0000");
        color = "#ff0000";
    } else {
        firstLet.setAttribute("fill", "#000000");
        secondLet.setAttribute("font-size", "70");
        thirdLet.setAttribute("font-size", "70");
        forthLet.setAttribute("font-size", "70");
        sixthLet.setAttribute("fill", "#000000");
        color = "#000000";
    }
    

    
}, 1000);

// let y = 0;
// let direction = 2;

// function animate() {
//   y += direction;
//   if (y > 100 || y < -100) {
//     direction *= -1;
// }
// fifthLet.style.position = "relative";

//   fifthLet.style.transform = `translateY(${y}px)`;
//   requestAnimationFrame(animate);
// }

// requestAnimationFrame(animate);