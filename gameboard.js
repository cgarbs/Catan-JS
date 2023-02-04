const container = document.querySelector(".container");
container.style.width = "800px";
container.style.height = "800px";


const layout = [
    [1,2,3],
    [4,5,6,7],
    [8,9,10,11,12],
    [13,14,15,16],
    [17,18,19]
]

//Resource/layout? Or Grid based dots?

// // Grid
// const createGrid = () => {
// for(i = 1; i <= 132; i++) {
//     const dot = document.createElement("button");
//     dot.style.width = "10px";
//     dot.style.height = "10px";
//     dot.style.backgroundColor = "red";
//     dot.style.margin = "10px";
//     dot.classList.add(`dot${[i]}`);
//     container.appendChild(dot);
//     }
// }

// createGrid();