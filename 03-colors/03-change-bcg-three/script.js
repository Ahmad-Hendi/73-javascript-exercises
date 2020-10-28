/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let arrColor = ["red", "blue", "pink", "yellow", "brown", "orange"];
let btn = document.getElementById("run");
btn.addEventListener ("click", () => {
    let randomColor = arrColor[Math.floor(Math.random() * arrColor.length)];
    document.bgColor = randomColor;
});
//     // your code here

// })();

    



