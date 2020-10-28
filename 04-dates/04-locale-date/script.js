/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let date = new Date(2020, 10)
    // console.log(date.getFullYear());
    // console.log(date.getDate());
    console.log(date.toISOString());
    console.log(date.toLocaleString("en-US"));
    console.log(date.toLocaleDateString("en-US"));
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    /*
    (function() {
    let date=new Date;
    let days=["Sunday","Monday","Thuesday", "Wednesday","Thursday", "Friday","Saturday"]
    let months=["January","February","March","April","Mai","June","July","August","September","October","November","December"]
    document.getElementById("target").innerHTML = days[date.getDay()]+" "+date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear()+", "+date.getHours()+"h"+date.getMinutes();
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
*/
    // your code here

})();
