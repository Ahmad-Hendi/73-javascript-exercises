/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
let conf;
function question(){
   
    let question1 = prompt("How old are you? ");
    let question2 = prompt("What is your Gender? ");
    let question3 = prompt("Where are you living? "); 
    let conf = confirm("press OK if the info are correct: " + ' ' + question1 + ' ' + question2 + ' ' + question3); 
}
question();


if (conf == false){
    question();
} 
    
    // your code here


