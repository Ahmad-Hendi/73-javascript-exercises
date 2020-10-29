/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
let getValue = document.getElementById("pass-one");
    getValue.addEventListener("input", function(){
    getValue.setAttribute("maxlength", 10);
    if (getValue.value.length < 11){
    document.getElementById("counter").innerHTML = getValue.value.length + "/10";
    }
})
})();

