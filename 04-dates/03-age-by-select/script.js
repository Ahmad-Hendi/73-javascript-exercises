/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
    let date = new Date ();
    date.setDate(document.getElementById("dob-day").value);
    date.setMonth(document.getElementById("dob-month").value);
    date.setFullYear(document.getElementById("dob-year").value);
    alert(document.getElementById("dob-day").value + "/" + document.getElementById("dob-month").value + "/" + document.getElementById("dob-year").value);
});   
    
})();
    
    
    

    




